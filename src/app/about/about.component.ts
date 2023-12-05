import { Component, HostListener, OnInit } from '@angular/core';
import { AboutModel } from './about.model';
import { ScreenSizeService } from '../shared/screen-size/screen-size.service';
import { Clipboard } from '@angular/cdk/clipboard';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{

  screenSize!: string;
  rickFlag:boolean = false;
  clipboardFlag: boolean = false;

  rickTriggers(){
    this.closeMessage();
    this.rickFlag = !this.rickFlag;
  }

  copyToClipboard(value: string){
    this.rickFlag = false;
    this.clipboardFlag = true;
    this.clipboard.copy(value);
  }

  closeMessage(){
    this.clipboardFlag = false;
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
    private clipboard: Clipboard,
  ){};

    aboutSections: AboutModel[] = [
    {
      id: 0,
      title: 'Introducing Leochan Supermarket: Where Quality Meets Care',
      description: "At Leochan Supermarket, we redefine the grocery shopping experience. Nestled in the heart of the community, Leochan stands as a beacon of quality, care, and community well-being. Unlike other supermarkets, our dedication goes beyond providing your everyday necessities; we prioritize the quality of our products and the welfare of our customers.",
      imgPath: 'http://via.placeholder.com/640x360'
    },
    {
      id: 1,
      title: 'Quality You Can Trust',
      description: "At Leochan, we believe that the key to a healthy life starts with the food you eat. That's why we painstakingly source our products from trusted local farmers and renowned international suppliers. Every apple, every loaf of bread, and every cut of meat is carefully inspected to meet our rigorous quality standards. We are committed to ensuring that only the freshest, safest, and most delicious items find their way to our shelves.",
      imgPath: 'http://via.placeholder.com/640x360'
    },
    {
      id: 2,
      title: 'Caring for Your Well-being',
      description: "Your health is our priority. That's why Leochan Supermarket offers a wide range of organic, gluten-free, and locally sourced products. We understand the diverse dietary needs of our community, and we take pride in catering to every taste and preference. Our knowledgeable staff is always ready to assist you, ensuring that your shopping experience is not just convenient but also enjoyable.",
      imgPath: 'http://via.placeholder.com/640x360'
    },
    {
      id: 3,
      title: 'Giving Back to the Community',
      description: "Unlike other supermarkets, we believe that profits should be reinvested into the community, not sent to bureaucratic entities like the Ministry of Economy. At Leochan, a significant portion of our profits is dedicated to community projects, education initiatives, and environmental conservation programs. We are devoted to creating a sustainable future for everyone, one where the community thrives together.",
      imgPath: 'http://via.placeholder.com/640x360'
    },
    
    
  ];
}
