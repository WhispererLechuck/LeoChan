import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {
  screenSize?: string;

  getScreenSize(){
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
      this.screenSize = 'mobile';
    } else if (screenWidth <= 1024) {
      this.screenSize = 'tablet';
    } else {
      this.screenSize = 'desktop';
    }
    return this.screenSize;
  }

  constructor() { }
}
