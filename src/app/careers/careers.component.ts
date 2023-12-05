import { Component, HostListener } from '@angular/core';
import { ScreenSizeService } from '../shared/screen-size/screen-size.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent {

setter($event: number) {
  this.productId = $event;
}
goBack(){
this.productId = undefined;
}

  screenSize!: string;
  flagMobile: boolean = false;
  productId?: number;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenSize = this.screenSizeService.getScreenSize(); 
    if(this.screenSize==='mobile'){
      this.flagMobile = true;
    }
  }

  ngOnInit(): void {
    this.screenSize = this.screenSizeService.getScreenSize();
    
    // console.log(this.router.url.split('/').pop())
  
    if( this.productId ){
      this.flagMobile = true;
    }
  }

  constructor(
    private screenSizeService: ScreenSizeService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ){};

}
