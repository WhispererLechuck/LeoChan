import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from './cart.service';
import { ProductsModel } from '../shared/products/producs.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../shared/products/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy{

  constructor(
    private cartService: CartService, 
    private router: Router,
    private productService: ProductsService,
    private activatedRoute: ActivatedRoute){}

    math = Math;
    inputValues: number[] = [];
    totalCartValue: number = 0;
    errorMessage?: string;

    emptyCart!: boolean;


  cartActual : ProductsModel[] =[];
  
  private cartChangeSub !: Subscription;

  closeError() {
    this.errorMessage = ''  
  }

  goBack(){
    this.router.navigate(['store']);
  }

  updateProd(product: ProductsModel, amount: number){
    this.errorMessage = '';
    if(amount === 0){
      this.deleteProd(product.name);
    } else
    {
      if(this.cartService.checkAmount(product.name,amount) && amount > 0){

      this.cartService.updateProductAmount(product,amount);
      }else{
        this.errorMessage = 'Please provide a valid amount, the max amount possible for '+ product.name +' is: ' + this.productService.getItem(product.name).amount;
      }

    }
  }
  
  deleteProd(productName: string){
    this.cartService.deleteProduct(productName);
    this.emptyCart = this.cartService.checkChart();
  }
  updatePrice(){
    this.totalCartValue = 0;
    this.totalCartValue = this.cartService.getPrice();
  }
 

  navigateTo(){
    this.router.navigate(['checkout'],{relativeTo: this.activatedRoute})
  }
  generateOptions(name: string): number[] {

    return Array.from({ length: this.productService.getItem(name).amount }, (_, index) => index + 1);
  }

  ngOnInit(): void {
    this.cartActual = this.cartService.getCart();
    this.emptyCart = this.cartService.checkChart();
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
