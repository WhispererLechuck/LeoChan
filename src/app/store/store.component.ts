import { Component, HostListener, OnInit } from '@angular/core';
import { ScreenSizeService } from '../shared/screen-size/screen-size.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit{
  screenSize!: string;
  productFlag: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenSize = this.screenSizeService.getScreenSize(); 
  }

  ngOnInit(): void {
    this.screenSize = this.screenSizeService.getScreenSize();
    if(this.router.url.split('/').pop()!='store'){
      this.productFlag = true;
    }
  }

  setter(){
    this.productFlag = true;
  }

  goBack(){
    this.productFlag = false;
    this.router.navigate(['/store']);

  }

  constructor(
    private screenSizeService: ScreenSizeService,
    private router: Router,
  ){};

}
