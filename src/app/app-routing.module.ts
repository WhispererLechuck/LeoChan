import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StoreComponent } from './store/store.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { ProductListComponent } from './store/product-list/product-list.component';
import { ProductDetailsComponent } from './store/product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { WelcomeShopComponent } from './store/welcome-shop/welcome-shop.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';
import { CareersComponent } from './careers/careers.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'careers', component: CareersComponent},
  {path: 'store', component: StoreComponent, children:[
    {path:'', component: WelcomeShopComponent},
    {path:':name', component:ProductListComponent},
    {path:':name', children: [

    {path: ':id', component: ProductDetailsComponent, }
    ]},
  ]},
  {path: 'cart', component: CartComponent},
  {path: 'cart', children: [
    {path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard]}
  ]},
  {path: 'notFound', component: NotFoundComponent},
  {path: 'auth', component: AuthComponent},
  {path:'**', redirectTo:'notFound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
