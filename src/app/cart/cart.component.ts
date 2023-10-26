import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from './cart.service';
import { ProductsModel } from '../shared/products/producs.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy{
  constructor(private cartService: CartService){}

  cartActual : ProductsModel[] =[];
  private cartChangeSub !: Subscription;


  ngOnInit(): void {
    this.cartActual = this.cartService.getCart();
    this.cartChangeSub = this.cartService.cartChanged.
    subscribe(
      (cart : ProductsModel[]): void => {
        this.cartActual = cart;
      }
    )
  }
  ngOnDestroy(): void {
    this.cartChangeSub.unsubscribe();
  }
}
