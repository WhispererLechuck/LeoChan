import { Injectable } from '@angular/core';
import { ProductsModel } from '../shared/products/producs.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartChanged = new Subject<ProductsModel[]>();

  cart:ProductsModel[]=[];

  getCart(){
    return this.cart.slice();
  }

  getProduct(name: string){
    const index = this.getCart().findIndex(x => x.name ===name);
    return this.cart[index];
  }

  getIds(){
    const ids: number[] = [];
    if (this.cart.length > 0) {
      this.cart.forEach( element => {
      ids.push(element.id);
      });
    }
    return ids;
  }
  addProduct(product: ProductsModel, quantity: number) {
    product.amount = quantity;
    // if (this.cart.length>0) {
    //   const ids = this.getIds();
    //   if(ids.includes(product.id)){
    //     let oldProd = this.getProduct(product.name);
    //     oldProd.amount = oldProd.amount + product.amount;
    //   }else{
    //     this.cart.push(product);

    //   }
    // }
    this.cart.push(product);
    console.log(this.cart.slice())
    this.cartChanged.next(this.cart.slice());
  }


  constructor() { }
}
