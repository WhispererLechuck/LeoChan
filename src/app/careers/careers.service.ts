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

  jobList: positionModel[] = [
    {
        id: 1,
        name: 'Web Developer',
        description: 'Design and develop user-friendly interfaces for the online grocery store.',
        salaryRange: '2000-2500 EUR',
        location: ['Remote', 'Madrid']
    },
    {
        id: 2,
        name: 'Graphic Designer',
        description: 'Create visually appealing graphics for online promotions and advertisements.',
        salaryRange: '1500-1800 EUR',
        location: ['Madrid']
    },
    {
        id: 3,
        name: 'Social Media Manager',
        description: 'Manage the supermarket\'s social media accounts and create engaging content.',
        salaryRange: '1200-1500 EUR',
        location: ['Remote']
    },
    {
        id: 4,
        name: 'Digital Marketing Specialist',
        description: 'Develop and implement online marketing strategies and campaigns.',
        salaryRange: '1800-2200 EUR',
        location: ['Madrid']
    },
    {
        id: 5,
        name: 'HR Assistant',
        description: 'Support human resources processes and assist in recruitment activities.',
        salaryRange: '1100-1400 EUR',
        location: ['Cartagena']
    },
    {
        id: 6,
        name: 'Customer Support Representative',
        description: 'Provide assistance to customers with inquiries, orders, and issues.',
        salaryRange: '1300-1600 EUR',
        location: ['Remote', 'Madrid']
    },
    {
        id: 7,
        name: 'Inventory Coordinator',
        description: 'Manage product inventory, restocking, and supplier communications.',
        salaryRange: '1400-1700 EUR',
        location: ['Madrid']
    },
    {
        id: 8,
        name: 'Data Analyst',
        description: 'Analyze customer data to improve services, sales, and user experience.',
        salaryRange: '1800-2200 EUR',
        location: ['Remote']
    },
    {
        id: 9,
        name: 'Content Writer',
        description: 'Create engaging and informative content for the online store\'s blog and website.',
        salaryRange: '1200-1500 EUR',
        location: ['Remote']
    },
    {
        id: 10,
        name: 'Delivery Driver',
        description: 'Ensure timely and safe delivery of grocery orders to customers\' doorsteps.',
        salaryRange: '1100-1400 EUR',
        location: ['Madrid', 'Cartagena']
    },
    {
        id: 11,
        name: 'UI/UX Designer',
        description: 'Design intuitive and seamless user interfaces and experiences for the online platform.',
        salaryRange: '2000-2500 EUR',
        location: ['Remote', 'Madrid']
    },
    {
        id: 12,
        name: 'Quality Assurance Tester',
        description: 'Test and evaluate the supermarket\'s website and mobile applications for functionality and user experience.',
        salaryRange: '1600-1900 EUR',
        location: ['Remote']
    },
    {
      id: 13,
      name: 'Product Photographer',
      description: 'Capture high-quality images of products for the online store.',
      salaryRange: '1400-1700 EUR',
      location: ['Madrid']
  },
  {
      id: 14,
      name: 'Warehouse Supervisor',
      description: 'Oversee warehouse operations, including storage and order fulfillment.',
      salaryRange: '1600-1900 EUR',
      location: ['Cartagena']
  },
  {
      id: 15,
      name: 'Mobile App Developer',
      description: 'Develop and maintain a mobile application for convenient shopping.',
      salaryRange: '2000-2500 EUR',
      location: ['Remote', 'Madrid']
  },
  {
      id: 16,
      name: 'Food Safety Inspector',
      description: 'Ensure products meet food safety standards and regulations.',
      salaryRange: '1800-2200 EUR',
      location: ['Madrid']
  },
  {
      id: 17,
      name: 'E-commerce Analyst',
      description: 'Analyze online sales data and customer behavior to optimize the website.',
      salaryRange: '1800-2200 EUR',
      location: ['Remote']
  },
  {
      id: 18,
      name: 'Packaging Designer',
      description: 'Design attractive and functional packaging for grocery products.',
      salaryRange: '1500-1800 EUR',
      location: ['Madrid']
  },
  {
      id: 19,
      name: 'User Support Specialist',
      description: 'Provide technical assistance to customers regarding the online platform.',
      salaryRange: '1300-1600 EUR',
      location: ['Remote', 'Madrid', 'Cartagena']
  },
  {
      id: 20,
      name: 'Sourcing Manager',
      description: 'Manage relationships with suppliers and source new products for the store.',
      salaryRange: '1900-2300 EUR',
      location: ['Cartagena']
  },
  {
      id: 21,
      name: 'Chat Support Agent',
      description: 'Assist customers with inquiries and issues through online chat support.',
      salaryRange: '1200-1500 EUR',
      location: ['Remote']
  },
  {
      id: 22,
      name: 'UI/UX Tester',
      description: 'Evaluate user interfaces and experiences for usability and efficiency.',
      salaryRange: '1500-1800 EUR',
      location: ['Remote']
  },
  {
      id: 23,
      name: 'Supply Chain Analyst',
      description: 'Optimize supply chain processes to ensure efficient product delivery.',
      salaryRange: '1900-2300 EUR',
      location: ['Madrid']
  },
  {
      id: 24,
      name: 'Customer Data Analyst',
      description: 'Analyze customer data to personalize marketing strategies and enhance user experience.',
      salaryRange: '1700-2000 EUR',
      location: ['Remote']
  }
];

  constructor() { }
}
