import { Inject, Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map, take } from 'rxjs/operators';


export const AuthGuard: CanActivateFn = (route, state) => {
    let isAuth;
    const authService = inject(AuthService);
    const router = inject(Router);
    const isAnonymous=localStorage.getItem('localUser');
    if (!isAnonymous) {
       router.navigate(["/auth"]);
       return false;
    }
    return true;
  
    // 👇 Grants or deny access to this route

    
}

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     return this.authService.user.pipe(take(1),map(user => {

//       const isAuth = !!user;
//       if(isAuth){
//         return true;
//       }
//       return this.router.createUrlTree(['/auth']);
//     }));
//   }

// canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
//     return true;
// }

//   loginGuard : CanActivateFn = (
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot,
//   ):
//     | Observable<boolean | UrlTree>
//     | Promise<boolean | UrlTree>
//     | boolean
//     | UrlTree => {
//     // const currentUser = inject(CurrentUserService).getCurrentUser();

//     let isAuth;
//     this.authService.user.pipe(take(1),map(user => {

//          isAuth = !!user;
//         if(isAuth){
//           return true;
//         }
//         return this.router.createUrlTree(['/auth']);
//       }));
    
  
//     // 👇 Redirects to another route
//     const isAnonymous = !isAuth;
//     if (isAnonymous) {
//       return this.router.createUrlTree(["/auth"]);
//     }
  
//     // 👇 Grants or deny access to this route
//     const attemptsToAccessItsOwnPage = this.router.createUrlTree(['/cart/checkout']);
//     return attemptsToAccessItsOwnPage;
//   };
  
// }
