import { Component, OnInit } from '@angular/core';
import { positionModel } from '../position.model';
import { CareersService } from '../careers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-position-detail',
  templateUrl: './position-detail.component.html',
  styleUrls: ['./position-detail.component.css']
})
export class PositionDetailComponent implements OnInit{
popFlag: boolean = false;
jobApplication() {
  this.popFlag = true;
}
closePop(){
  this.popFlag = false;
}
  job?: positionModel;
  location?: string;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params)=>{
      const productId = params['positionId'];
      this.job = this.careersService.getJob(+productId);
      if(this.careersService.getIndex(productId) == -1){
        this.router.navigate(['notFound'],{relativeTo: this.activatedRoute.parent})     
      } 
      this.location = this.job.location.join(' - ');
    });
  }
  constructor(
    private careersService: CareersService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ){}
}
