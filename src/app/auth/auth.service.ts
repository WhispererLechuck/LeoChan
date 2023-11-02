import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, tap, throwError } from "rxjs";
import { User } from "./user.model";
import { Router } from "@angular/router";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";


export interface authResponseData {
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string,
    registered?: boolean,
  }

@Injectable({
    providedIn: 'root',
})
export class AuthService{
    constructor (private http: HttpClient, private router: Router){}
    api:string = 'AIzaSyD0wb73I5RsXWQm-JS_EGcRrLto7iPEFvY';
    user = new BehaviorSubject<User|null>(null);
    intervalLogout?: any;

    signIn(mail:string, password: string){
        return this.http.post<authResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+this.api,
            {
                "email": mail, 
                "password":password, 
                "returnSecureToken":true
            }
            )
            .pipe(catchError(this.handleErrors), tap(resData => {
                this.handleAuth(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
            }))
    }
    logout(){
        this.user.next(null);
        this.router.navigate(['/auth']);
        localStorage.removeItem('localUser');
        clearInterval(this.intervalLogout);
        this.intervalLogout = null;
    }
    autologout(timeToLogout: number){
        this.intervalLogout = setInterval(()=>{
            this.logout();
        },timeToLogout);
    }

    login(mail:string, password: string){
        return this.http.post<authResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+this.api,
            {
                "email": mail, 
                "password":password, 
                "returnSecureToken":true
            }
            )
            .pipe(catchError(this.handleErrors),tap(resData => {
                this.handleAuth(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
            }))
    }
    autoLogin(){
        const localUser: {
            email:string,
            id: string,
            _token: string,
            _tokenExpirationDate: string
        } = JSON.parse(localStorage.getItem('localUser')!);
        if (!localUser) {
            return;
        }
        const loadedUser = new User(
            localUser.email,
            localUser.id,
            localUser._token,
            new Date(localUser._tokenExpirationDate));
            if(loadedUser.token){
                const nextExpiration = new Date(localUser._tokenExpirationDate).getTime() - new Date().getTime() ;
                this.user.next(loadedUser);
                this.autologout(nextExpiration);
            }
    }
    private handleAuth(email: string, localId: string, tokenId: string, expiresIn: number){

        const expireDate = new Date(new Date().getTime() + expiresIn * 1000);
        const user = new User(email,localId,tokenId,expireDate);
        this.user.next(user);
        this.autologout(expiresIn * 1000);
        localStorage.setItem('localUser',JSON.stringify(user))
    }
    private handleErrors(error: HttpErrorResponse){
        console.log(error);
        let errorMessage = 'Unknown error!';
        if(!error.error || !error.error.error){
            return throwError(()=> new Error(errorMessage));

            // return throwError(errorMessage);
        }
        switch(error.error.error.message){
            case 'EMAIL_EXISTS':
                errorMessage = 'Email already exists';
                break;
            case 'POKEMON':
                errorMessage = 'Pokemon';
                break;
            case "TOO_MANY_ATTEMPTS_TRY_LATER : Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.":
                errorMessage = 'Attempt limit exceed.';
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'Email not found.';
                break;
            case 'TOO_MANY_ATTEMPTS_TRY_LATER':
                errorMessage = 'LIMIT EXCEEDED MY AMIGO';
                break;
            case "INVALID_LOGIN_CREDENTIALS":
                errorMessage = 'Invalid credentials';
                break;
        }
        // return throwError(errorMessage);
        return throwError(()=> new Error(errorMessage));


    }


}