import { Injectable } from '@angular/core';
import { positionModel } from './position.model';

@Injectable({
  providedIn: 'root'
})
export class CareersService {

  getPositions(){
    return this.jobList.slice();
  }
  getIndex(id: number):number{
    let idx = -1;
    this.getPositions().forEach((element,index) => {
     if (element.id == id) idx = index 
    });
    return idx;
  }
  

  getJob(id: number): positionModel{
    return this.jobList[this.getIndex(id)!];
  }

//   jobList: positionModel[] = [
//     {
//         id: 1,
//         name: 'Web Developer',
//         description: 'As a Senior Web Developer at Leochan Supermarket, you will lead the charge in revolutionizing our online grocery store. Your responsibilities include architecting scalable and responsive web applications, implementing innovative features, and ensuring top-notch performance and security. Collaborate with cross-functional teams to optimize user experience and drive customer engagement. We seek a seasoned developer with a passion for cutting-edge technologies and a track record of successful web projects.',
//         salaryRange: '2000-2500 EUR',
//         location: ['Remote', 'Madrid'],
//         requirements: [
//             '5+ years of web development experience',
//             'Expertise in HTML, CSS, JavaScript, and related technologies',
//             'Proficiency in front-end and back-end frameworks (Angular, Node.js, etc.)',
//             'Experience with version control systems (Git, SVN, etc.)',
//             'Strong problem-solving and communication skills'
//         ]
//     },
//     {
//         id: 2,
//         name: 'Graphic Designer',
//         description: 'Create visually appealing graphics for online promotions and advertisements.',
//         salaryRange: '1500-1800 EUR',
//         location: ['Madrid']
//     },
//     {
//         id: 3,
//         name: 'Social Media Manager',
//         description: 'Manage the supermarket\'s social media accounts and create engaging content.',
//         salaryRange: '1200-1500 EUR',
//         location: ['Remote']
//     },
//     {
//         id: 4,
//         name: 'Digital Marketing Specialist',
//         description: 'Develop and implement online marketing strategies and campaigns.',
//         salaryRange: '1800-2200 EUR',
//         location: ['Madrid']
//     },
//     {
//         id: 5,
//         name: 'HR Assistant',
//         description: 'Support human resources processes and assist in recruitment activities.',
//         salaryRange: '1100-1400 EUR',
//         location: ['Cartagena']
//     },
//     {
//         id: 6,
//         name: 'Customer Support Representative',
//         description: 'Provide assistance to customers with inquiries, orders, and issues.',
//         salaryRange: '1300-1600 EUR',
//         location: ['Remote', 'Madrid']
//     },
//     {
//         id: 7,
//         name: 'Inventory Coordinator',
//         description: 'Manage product inventory, restocking, and supplier communications.',
//         salaryRange: '1400-1700 EUR',
//         location: ['Madrid']
//     },
//     {
//         id: 8,
//         name: 'Data Analyst',
//         description: 'Analyze customer data to improve services, sales, and user experience.',
//         salaryRange: '1800-2200 EUR',
//         location: ['Remote']
//     },
//     {
//         id: 9,
//         name: 'Content Writer',
//         description: 'Create engaging and informative content for the online store\'s blog and website.',
//         salaryRange: '1200-1500 EUR',
//         location: ['Remote']
//     },
//     {
//         id: 10,
//         name: 'Delivery Driver',
//         description: 'Ensure timely and safe delivery of grocery orders to customers\' doorsteps.',
//         salaryRange: '1100-1400 EUR',
//         location: ['Madrid', 'Cartagena']
//     },
//     {
//         id: 11,
//         name: 'UI/UX Designer',
//         description: 'Design intuitive and seamless user interfaces and experiences for the online platform.',
//         salaryRange: '2000-2500 EUR',
//         location: ['Remote', 'Madrid']
//     },
//     {
//         id: 12,
//         name: 'Quality Assurance Tester',
//         description: 'Test and evaluate the supermarket\'s website and mobile applications for functionality and user experience.',
//         salaryRange: '1600-1900 EUR',
//         location: ['Remote']
//     },
//     {
//       id: 13,
//       name: 'Product Photographer',
//       description: 'Capture high-quality images of products for the online store.',
//       salaryRange: '1400-1700 EUR',
//       location: ['Madrid']
//   },
//   {
//       id: 14,
//       name: 'Warehouse Supervisor',
//       description: 'Oversee warehouse operations, including storage and order fulfillment.',
//       salaryRange: '1600-1900 EUR',
//       location: ['Cartagena']
//   },
//   {
//       id: 15,
//       name: 'Mobile App Developer',
//       description: 'Develop and maintain a mobile application for convenient shopping.',
//       salaryRange: '2000-2500 EUR',
//       location: ['Remote', 'Madrid']
//   },
//   {
//       id: 16,
//       name: 'Food Safety Inspector',
//       description: 'Ensure products meet food safety standards and regulations.',
//       salaryRange: '1800-2200 EUR',
//       location: ['Madrid']
//   },
//   {
//       id: 17,
//       name: 'E-commerce Analyst',
//       description: 'Analyze online sales data and customer behavior to optimize the website.',
//       salaryRange: '1800-2200 EUR',
//       location: ['Remote']
//   },
//   {
//       id: 18,
//       name: 'Packaging Designer',
//       description: 'Design attractive and functional packaging for grocery products.',
//       salaryRange: '1500-1800 EUR',
//       location: ['Madrid']
//   },
//   {
//       id: 19,
//       name: 'User Support Specialist',
//       description: 'Provide technical assistance to customers regarding the online platform.',
//       salaryRange: '1300-1600 EUR',
//       location: ['Remote', 'Madrid', 'Cartagena']
//   },
//   {
//       id: 20,
//       name: 'Sourcing Manager',
//       description: 'Manage relationships with suppliers and source new products for the store.',
//       salaryRange: '1900-2300 EUR',
//       location: ['Cartagena']
//   },
//   {
//       id: 21,
//       name: 'Chat Support Agent',
//       description: 'Assist customers with inquiries and issues through online chat support.',
//       salaryRange: '1200-1500 EUR',
//       location: ['Remote']
//   },
//   {
//       id: 22,
//       name: 'UI/UX Tester',
//       description: 'Evaluate user interfaces and experiences for usability and efficiency.',
//       salaryRange: '1500-1800 EUR',
//       location: ['Remote']
//   },
//   {
//       id: 23,
//       name: 'Supply Chain Analyst',
//       description: 'Optimize supply chain processes to ensure efficient product delivery.',
//       salaryRange: '1900-2300 EUR',
//       location: ['Madrid']
//   },
//   {
//       id: 24,
//       name: 'Customer Data Analyst',
//       description: 'Analyze customer data to personalize marketing strategies and enhance user experience.',
//       salaryRange: '1700-2000 EUR',
//       location: ['Remote']
//   }
// ];

jobList: positionModel[] = [
    {
        id: 1,
        name: 'Junior Web Developer',
        description: 'As a Junior Web Developer at LeoChan, you will assist in building and maintaining user-friendly interfaces for our online supermarket. Collaborate with senior developers, follow industry best practices, and contribute to the development of new website features. Basic knowledge of HTML, CSS, and JavaScript is required. This role is ideal for entry-level developers looking to expand their skills in a supportive environment.',
        salaryRange: '1500-1800 EUR',
        location: ['Remote'],
        requirements: [
            'Basic knowledge of HTML, CSS, and JavaScript',
            'Willingness to learn and adapt to new technologies',
            'Strong problem-solving skills',
            'Ability to work well in a team'
        ]
    },
    {
        id: 2,
        name: 'Social Media Coordinator',
        description: 'LeoChan is seeking a Social Media Coordinator to manage our social media presence. Create engaging content, schedule posts, respond to customer inquiries, and track social media metrics. Experience with social media platforms and basic graphic design skills are necessary. The ideal candidate is creative, communicative, and passionate about building brand awareness online.',
        salaryRange: '1300-1600 EUR',
        location: ['Remote'],
        requirements: [
            'Experience with social media platforms (Facebook, Twitter, Instagram, etc.)',
            'Basic graphic design skills (Canva, Adobe Spark, etc.)',
            'Strong written and verbal communication skills',
            'Ability to analyze social media metrics'
        ]
    },
    {
        id: 3,
        name: 'Customer Support Representative',
        description: 'Join LeoChan as a Customer Support Representative and provide excellent assistance to our customers. Respond to inquiries, resolve issues, and ensure customer satisfaction. Strong communication skills, empathy, and patience are crucial. Experience in customer service is a plus. This role is ideal for individuals who enjoy helping others and have a positive attitude.',
        salaryRange: '1400-1700 EUR',
        location: ['Remote', 'Madrid'],
        requirements: [
            'Excellent communication and interpersonal skills',
            'Ability to handle challenging customer situations with patience',
            'Previous experience in customer service is a plus'
        ]
    },
    {
        id: 4,
        name: 'E-commerce Analyst',
        description: 'LeoChan is looking for an E-commerce Analyst to analyze online sales data and customer behavior. Utilize analytical tools, generate reports, and provide insights to optimize the website and marketing strategies. Strong analytical skills, attention to detail, and knowledge of e-commerce trends are required. Experience with Google Analytics or similar tools is a plus.',
        salaryRange: '1600-1900 EUR',
        location: ['Remote', 'Madrid'],
        requirements: [
            'Proficiency in data analysis tools (Excel, SQL, etc.)',
            'Experience with data visualization platforms (Tableau, Power BI, etc.)',
            'Knowledge of e-commerce trends and online consumer behavior'
        ]
    },
    {
        id: 5,
        name: 'Inventory Coordinator',
        description: 'As an Inventory Coordinator at LeoChan, you will oversee product inventory, manage restocking processes, and communicate with suppliers. Monitor stock levels, track product movements, and ensure timely restocking. Attention to detail, organizational skills, and ability to work with suppliers are essential. Experience in inventory management systems is a plus.',
        salaryRange: '1500-1800 EUR',
        location: ['Madrid'],
        requirements: [
            'Strong organizational and multitasking abilities',
            'Ability to work effectively with suppliers and internal teams',
            'Experience with inventory management systems is a plus'
        ]
    },
    {
        id: 6,
        name: 'UI/UX Designer',
        description: 'LeoChan is seeking a UI/UX Designer to create intuitive and visually appealing user interfaces for our online platform. Collaborate with development teams, conduct user research, and design wireframes and prototypes. Proficiency in design software (Sketch, Figma, etc.) and a strong portfolio demonstrating UX/UI projects are required. Attention to user experience and creative problem-solving skills are essential.',
        salaryRange: '1800-2200 EUR',
        location: ['Remote', 'Madrid'],
        requirements: [
            'Proficiency in UX/UI design software (Sketch, Figma, etc.)',
            'Strong portfolio demonstrating UX/UI projects',
            'Creative problem-solving skills'
        ]
    },
    {
        id: 7,
        name: 'Digital Marketing Specialist',
        description: 'Join LeoChan as a Digital Marketing Specialist and drive online marketing initiatives. Develop and implement digital marketing campaigns, optimize SEO, manage social media advertising, and analyze campaign performance. Strong knowledge of digital marketing strategies, data analysis, and experience with online advertising platforms (Google Ads, Facebook Ads, etc.) are necessary.',
        salaryRange: '1900-2300 EUR',
        location: ['Remote'],
        requirements: [
            'Experience with online advertising platforms (Google Ads, Facebook Ads, etc.)',
            'Knowledge of SEO best practices',
            'Strong data analysis skills'
        ]
    },
    {
        id: 8,
        name: 'Quality Assurance Tester',
        description: 'As a Quality Assurance Tester at LeoChan, you will test and evaluate our website and mobile applications for functionality and user experience. Conduct manual testing, report bugs, and collaborate with developers to ensure high-quality releases. Attention to detail, problem-solving skills, and understanding of software testing methodologies are required. Experience with testing tools is a plus.',
        salaryRange: '1600-1900 EUR',
        location: ['Remote', 'Madrid'],
        requirements: [
            'Understanding of software testing methodologies',
            'Experience with testing tools (Selenium, Jira, etc.)',
            'Attention to detail and strong problem-solving skills'
        ]
    },
    {
        id: 9,
        name: 'Product Photographer',
        description: 'LeoChan is looking for a Product Photographer to capture high-quality images of our grocery products. Set up lighting, compose shots, and edit photos to showcase products effectively. Experience in product photography, knowledge of photography equipment, and proficiency in editing software (Adobe Photoshop, Lightroom, etc.) are essential. Attention to detail and creativity are crucial for this role.',
        salaryRange: '1700-2000 EUR',
        location: ['Madrid'],
        requirements: [
            'Experience in product photography',
            'Proficiency in photography editing software (Adobe Photoshop, Lightroom, etc.)',
            'Attention to detail and creativity'
        ]
    },
    {
        id: 10,
        name: 'Chat Support Agent',
        description: 'Join LeoChan as a Chat Support Agent and provide real-time assistance to customers through online chat support. Address inquiries, guide customers in the purchasing process, and ensure customer satisfaction. Strong typing skills, multitasking abilities, and excellent written communication are necessary. Previous experience in chat support or customer service is a plus.',
        salaryRange: '1400-1700 EUR',
        location: ['Remote'],
        requirements: [
            'Strong typing skills',
            'Excellent written communication skills',
            'Previous experience in chat support or customer service is a plus'
        ]
    },
    {
        id: 11,
        name: 'Data Analyst',
        description: 'LeoChan is seeking a Data Analyst to analyze customer data and market trends. Utilize statistical methods, generate reports, and provide insights to support business decisions. Proficiency in data analysis tools (Excel, SQL, etc.) and experience with data visualization platforms (Tableau, Power BI, etc.) are required. Strong analytical skills, attention to detail, and business acumen are essential.',
        salaryRange: '1800-2200 EUR',
        location: ['Remote', 'Madrid'],
        requirements: [
            'Proficiency in data analysis tools (Excel, SQL, etc.)',
            'Experience with data visualization platforms (Tableau, Power BI, etc.)',
            'Strong analytical skills and business acumen'
        ]
    },
    {
        id: 12,
        name: 'Delivery Driver',
        description: 'Become a Delivery Driver at LeoChan and ensure timely and safe delivery of grocery orders to customers\' doorsteps. Drive company vehicles, handle packages with care, and provide excellent customer service during deliveries. Valid driver\'s license, knowledge of local routes, and strong customer service skills are required. This role is ideal for individuals with a responsible and friendly demeanor.',
        salaryRange: '1500-1800 EUR',
        location: ['Madrid', 'Cartagena'],
        requirements: [
            'Valid driver\'s license',
            'Knowledge of local routes',
            'Strong customer service skills'
        ]
    },
    {
        id: 13,
        name: 'Sourcing Manager',
        description: 'LeoChan is looking for a Sourcing Manager to manage relationships with suppliers and source new products for the store. Negotiate contracts, evaluate supplier performance, and identify new sourcing opportunities. Strong negotiation skills, supply chain knowledge, and market research abilities are essential. Experience in procurement, vendor management, and product sourcing is required.',
        salaryRange: '1900-2300 EUR',
        location: ['Cartagena'],
        requirements: [
            'Experience in procurement and vendor management',
            'Strong negotiation skills',
            'Knowledge of market trends and product sourcing'
        ]
    },
    {
        id: 14,
        name: 'Mobile App Developer',
        description: 'Join LeoChan as a Mobile App Developer and create seamless and user-friendly mobile applications for convenient shopping. Collaborate with UI/UX designers and backend developers to deliver exceptional user experiences. Proficiency in mobile development frameworks (React Native, Flutter, etc.) and experience in building responsive and performant apps are essential.',
        salaryRange: '2000-2500 EUR',
        location: ['Remote', 'Madrid'],
        requirements: [
            'Proficiency in mobile development frameworks (React Native, Flutter, etc.)',
            'Experience in building responsive and performant mobile applications',
            'Strong problem-solving skills'
        ]
    },
    {
        id: 15,
        name: 'Content Marketing Manager',
        description: 'LeoChan is seeking a Content Marketing Manager to oversee our content strategy and creation. Develop engaging and informative content for blogs, social media, and email campaigns. Lead a team of writers and designers, analyze content performance, and adjust strategies for maximum impact. Proven experience in content marketing and excellent leadership skills are required.',
        salaryRange: '2200-2600 EUR',
        location: ['Remote', 'Madrid'],
        requirements: [
            'Proven experience in content marketing',
            'Strong leadership and team management skills',
            'Analytical mindset to measure content performance'
        ]
    },
    {
        id: 16,
        name: 'UI/UX Tester',
        description: 'As a UI/UX Tester at LeoChan, you will evaluate user interfaces and experiences for usability and efficiency. Conduct usability tests, identify issues, and collaborate with designers and developers to enhance user experiences. Attention to detail, critical thinking, and ability to empathize with users are crucial for this role.',
        salaryRange: '1500-1800 EUR',
        location: ['Remote'],
        requirements: [
            'Experience in usability testing and user research',
            'Attention to detail and critical thinking skills',
            'Empathy for users and ability to anticipate user needs'
        ]
    },
    {
        id: 17,
        name: 'Sales and Business Development Manager',
        description: 'Join LeoChan as a Sales and Business Development Manager and drive the growth of our online supermarket. Identify new business opportunities, build and maintain client relationships, and negotiate contracts. Develop sales strategies, analyze market trends, and collaborate with marketing teams to enhance brand visibility. Proven experience in sales and business development is required.',
        salaryRange: '2300-2700 EUR',
        location: ['Madrid'],
        requirements: [
            'Proven experience in sales and business development',
            'Strong negotiation and communication skills',
            'Analytical mindset to identify new business opportunities'
        ]
    },
    {
        id: 18,
        name: 'Senior Front End Developer',
        description: 'LeoChan is seeking a highly skilled Senior Front End Developer with expertise in Angular. Lead the development of our online supermarket\'s user interface, ensuring seamless and responsive user experiences. Collaborate with UX/UI designers and backend developers to implement innovative solutions. Strong knowledge of Angular framework, JavaScript, HTML, and CSS is required. Experience in optimizing application performance and solving complex technical challenges is essential.',
        salaryRange: '2500-3000 EUR',
        location: ['Remote', 'Madrid'],
        requirements: [
            'Expertise in Angular framework (Angular 2+)',
            'Strong proficiency in JavaScript, HTML, and CSS',
            'Experience with responsive design and cross-browser compatibility',
            'He has to be called Pablo *wink wink*',
            'Ability to optimize application performance and solve complex technical challenges'
        ]
    },
    {
        id: 19,
        name: 'Localization Specialist',
        description: 'Become a Localization Specialist at LeoChan and ensure our online content is culturally relevant and accurate for various regions. Adapt website content, product descriptions, and marketing materials to cater to different languages and cultures. Collaborate with translation teams, perform quality checks, and maintain consistency across all localized content. Multilingual proficiency and attention to detail are essential for this role.',
        salaryRange: '1600-1900 EUR',
        location: ['Remote', 'Madrid'],
        requirements: [
            'Multilingual proficiency in languages relevant to target regions',
            'Attention to detail and cultural sensitivity',
            'Experience in localization and translation is a plus'
        ]

    }
];


  constructor() { }
}

    