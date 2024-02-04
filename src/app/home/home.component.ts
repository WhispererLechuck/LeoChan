import { Component, HostListener } from '@angular/core';
import { ScreenSizeService } from '../shared/screen-size/screen-size.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  screenSize!: string;
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
}
