import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, authResponseData } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  @ViewChild('clickButton', { read: ElementRef, static:false }) clickButton!: ElementRef;
  authO?: Observable<authResponseData>;


  error: string = '';
  isLoading: boolean = false;
  authForm!: FormGroup;
  isAuthMode: boolean = false;
  actualMode: string = (!this.isAuthMode) ? 'Sign Up' : 'Login';

  clearError(){
    this.error ='';
  }

  switchMode(){
    this.isAuthMode = !this.isAuthMode;
    this.error = '';
    if (this.actualMode === 'Sign Up') {
      this.actualMode = 'Login';
      this.clickButton.nativeElement.classList.remove('btn-primary');
      this.clickButton.nativeElement.classList.add('btn-success');

    }  else {
      this.actualMode = 'Sign Up';
      this.clickButton.nativeElement.classList.add('btn-primary');
      this.clickButton.nativeElement.classList.remove('btn-success');
    } 
  }
  onClick(){
    this.isLoading = true;
    this.error = '';
    console.log(this.authForm);
    // setTimeout(() => {
    //   console.log('inside settimeout'+this.isLoading);
    // }, 2000);
    (this.isAuthMode) ? this.logIn() : this.signUp();
    this.authO?.subscribe(element =>{
      console.log(element);
      this.isLoading = false;
      this.reset();
      this.router.navigate(['store'])
    },errorMessage =>{
      this.error = errorMessage;
      this.isLoading = false;
    });
    
  }

  signUp(){
    if(this.authForm != null){

    const mail = this.authForm.get('email')?.value;
    const password = this.authForm.get('password')?.value;
    this.authO = this.authService.signIn(mail,password);
    }
  }

  logIn(){
    const mail = this.authForm.get('email')?.value;
    const password = this.authForm.get('password')?.value;
    this.authO = this.authService.login(mail, password);

  }

  reset(){
    this.authForm.reset();
    this.isAuthMode = false;
    this.clearError();
  }

  ngOnInit(): void {
    this.authForm = new FormGroup({
      'email' : new FormControl('puma23@puma.com',[Validators.required, Validators.email],),
      'password' : new FormControl('puma23@puma.com', [Validators.minLength(6),Validators.required],)
    })
  }

  constructor(
    private router: Router,
    private authService: AuthService) {}
}
