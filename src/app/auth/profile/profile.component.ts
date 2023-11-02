import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  localUser = localStorage.getItem('localUser');
  localUserJson = JSON.parse(this.localUser!); 

  logout(){
    this.auth.logout();
    this.router.navigate([''])
  }
  constructor(
    private auth: AuthService,
    private router: Router
    ){}
}
