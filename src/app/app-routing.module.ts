import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StoreComponent } from './store/store.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { ProductListComponent } from './store/product-list/product-list.component';
import { ProductDetailsComponent } from './store/product-details/product-details.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'store', component: StoreComponent, children:[
    {path:':name', component:ProductListComponent},
    {path:':name', children: [

    {path: ':productName', component: ProductDetailsComponent, }
    ] },
  ]},
  {path: 'notFound', component: NotFoundComponent},
  {path:'**', redirectTo:'notFound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
