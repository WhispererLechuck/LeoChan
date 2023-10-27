import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from './cart.service';
import { ProductsModel } from '../shared/products/producs.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy{
  constructor(
    private cartService: CartService, 
    private router: Router){}

    math = Math;
    inputValues: number[] = [];
    totalCartValue: number = 0;


  cartActual : ProductsModel[] =[];
  private cartChangeSub !: Subscription;


  goBack(){
    this.router.navigate(['store']);
  }

  updateProd(product: ProductsModel, amount: number){
    if(amount === 0){
      this.deleteProd(product.name);
    } else
    this.cartService.updateProductAmount(product,amount);
  }

  deleteProd(productName: string){
    this.cartService.deleteProduct(productName);
  }
  updatePrice(){
    this.cartActual.forEach(element => {
      this.totalCartValue += element.price*element.amount;
    });
  }


  ngOnInit(): void {
    this.cartActual = this.cartService.getCart();
    if(this.cartActual.length>0){
      this.updatePrice();
    }
    this.cartChangeSub = this.cartService.cartChanged.
    subscribe(
      (cart : ProductsModel[]): void => {
        this.cartActual = cart;
        this.updatePrice();
      }
    )
  }
  ngOnDestroy(): void {
    this.cartChangeSub.unsubscribe();
  }
}
