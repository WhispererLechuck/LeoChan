import { Component, HostListener, OnInit } from '@angular/core';
import { AboutModel } from '../about.model';
import { ScreenSizeService } from 'src/app/shared/screen-size/screen-size.service';

@Component({
  selector: 'app-app-carousel',
  templateUrl: './app-carousel.component.html',
  styleUrls: ['./app-carousel.component.css']
})
export class AppCarouselComponent implements OnInit{
  screenSize!: string;
  slide: number = 0;

  increaseSlide(){
    if(this.slide === 3){
      this.slide = 0;
    } else {
      this.slide++;
    }
  }
  decreaseSlide(){
    if(this.slide === 0){
      this.slide = 3;
    } else {
      this.slide--;
    }
  }
  setSlide(number: number){
    this.slide = number;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenSize = this.screenSizeService.getScreenSize(); 
  }

  ngOnInit(): void {
    this.screenSize = this.screenSizeService.getScreenSize();
  }

  constructor(
    private screenSizeService: ScreenSizeService,
  ){};

  aboutSections: AboutModel[] = [
    {
      id: 0,
      title: 'Introducing Leochan Supermarket: Where Quality Meets Care',
      description: "At Leochan Supermarket, we redefine the grocery shopping experience. Nestled in the heart of the community, Leochan stands as a beacon of quality, care, and community well-being. Unlike other supermarkets, our dedication goes beyond providing your everyday necessities; we prioritize the quality of our products and the welfare of our customers.",
      imgPath: '/assets/img/LeoChan - R1.jpeg'
    },
    {
      id: 1,
      title: 'Quality You Can Trust',
      description: "At Leochan, we believe that the key to a healthy life starts with the food you eat. That's why we painstakingly source our products from trusted local farmers and renowned international suppliers. Every apple, every loaf of bread, and every cut of meat is carefully inspected to meet our rigorous quality standards. We are committed to ensuring that only the freshest, safest, and most delicious items find their way to our shelves.",
      imgPath: '/assets/img/LeoChan - R2.jpeg'
    },
    {
      id: 2,
      title: 'Caring for Your Well-being',
      description: "Your health is our priority. That's why Leochan Supermarket offers a wide range of organic, gluten-free, and locally sourced products. We understand the diverse dietary needs of our community, and we take pride in catering to every taste and preference. Our knowledgeable staff is always ready to assist you, ensuring that your shopping experience is not just convenient but also enjoyable.",
      imgPath: '/assets/img/LeoChan - R3.jpeg'
    },
    {
      id: 3,
      title: 'Giving Back to the Community',
      description: "Unlike other supermarkets, we believe that profits should be reinvested into the community, not sent to bureaucratic entities like the Ministry of Economy. At Leochan, a significant portion of our profits is dedicated to community projects, education initiatives, and environmental conservation programs. We are devoted to creating a sustainable future for everyone, one where the community thrives together.",
      imgPath: '/assets/img/LeoChan - R4.jpeg'
    },
    
    
  ]
}
