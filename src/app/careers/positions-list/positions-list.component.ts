import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

import { CareersService } from '../careers.service';
import { positionModel } from '../position.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ScreenSizeService } from 'src/app/shared/screen-size/screen-size.service';

@Component({
  selector: 'app-positions-list',
  templateUrl: './positions-list.component.html',
  styleUrls: ['./positions-list.component.css']
})
export class PositionsListComponent implements OnInit {

  screenSize!: string;
  @Output() job = new EventEmitter<number>;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenSize = this.screenSizeService.getScreenSize(); 
  }


  jobList!: positionModel[];
  itemsPerPage: number = 10;
  currentPage: number = 1;
  page!: number;
  locationStrings: string [] =[];

  ngOnInit(): void {
    this.jobList = this.careersService.getPositions();
    this.locationSetter();

    this.screenSize = this.screenSizeService.getScreenSize();
  }

  navigateTo(id: number){
    if(this.careersService.getIndex(id) != -1){
      this.job.emit(id);
     this.router.navigate([id],{relativeTo: this.activatedRoute})
    } else {
      this.router.navigate(['notFound'],{relativeTo: this.activatedRoute})     
    }
  }

  locationSetter(){
    let locationStr: string;
    this.jobList.forEach(element => {
    const elementAmount = element.location.length;
      locationStr='';
      element.location.forEach((location,index) => {
        locationStr += location;
        if(index<elementAmount-1) {
          locationStr += ' - ';
        }
      })
     this.locationStrings.push(locationStr);
    });
  }

  constructor(
    private careersService: CareersService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private screenSizeService: ScreenSizeService,

  ){}
}
