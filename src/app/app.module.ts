import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StoreComponent } from './store/store.component';
import { CareersComponent } from './careers/careers.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { StoreCategoriesComponent } from './store/store-categories/store-categories.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { ProductListComponent } from './store/product-list/product-list.component';
import { ProductDetailsComponent } from './store/product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WelcomeShopComponent } from './store/welcome-shop/welcome-shop.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';
import { PopupAddComponent } from './store/popup-add/popup-add.component';
import { AuthComponent } from './auth/auth.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './auth/profile/profile.component';
import { SearchComponent } from './store/search/search.component';
import { PositionsListComponent } from './careers/positions-list/positions-list.component';
import { CareersWelcomeComponent } from './careers/careers-welcome/careers-welcome.component';
import { PositionDetailComponent } from './careers/position-detail/position-detail.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { TypingComponent } from './home/typing/typing.component';
import { PopUpApplyComponent } from './careers/pop-up-apply/pop-up-apply.component';
import { AppCarouselComponent } from './about/app-carousel/app-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    StoreComponent,
    CareersComponent,
    NavbarComponent,
    StoreCategoriesComponent,
    NotFoundComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CartComponent,
    WelcomeShopComponent,
    CheckoutComponent,
    PopupAddComponent,
    AuthComponent,
    ProfileComponent,
    SearchComponent,
    PositionsListComponent,
    CareersWelcomeComponent,
    PositionDetailComponent,
    TypingComponent,
    PopUpApplyComponent,
    AppCarouselComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
