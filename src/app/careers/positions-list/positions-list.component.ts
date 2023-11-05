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

  ngOnInit(): void {
    this.jobList = this.careersService.getPositions();
  }

  navigateTo(id: number){
    if(this.careersService.getIndex(id) != -1){
     this.router.navigate([id],{relativeTo: this.activatedRoute})
    } else {
      this.router.navigate(['notFound'],{relativeTo: this.activatedRoute})     
    }
  }

  constructor(
    private careersService: CareersService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ){}
}
