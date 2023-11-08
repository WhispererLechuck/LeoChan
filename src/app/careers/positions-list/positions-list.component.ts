import { Component, OnInit } from '@angular/core';

import { CareersService } from '../careers.service';
import { positionModel } from '../position.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-positions-list',
  templateUrl: './positions-list.component.html',
  styleUrls: ['./positions-list.component.css']
})
export class PositionsListComponent implements OnInit {

  jobList!: positionModel[];
  itemsPerPage: number = 10;
  currentPage: number = 1;
  page?: number;
  locationStrings: string [] =[];

  ngOnInit(): void {
    this.jobList = this.careersService.getPositions();
    this.locationSetter();

    console.log(this.locationStrings);
  }

  navigateTo(id: number){
    if(this.careersService.getIndex(id) != -1){
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
    console.log(this.locationStrings)
  }

  constructor(
    private careersService: CareersService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ){}
}
