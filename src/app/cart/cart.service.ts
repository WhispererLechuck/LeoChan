import { Injectable } from '@angular/core';
import { ProductsModel } from '../shared/products/producs.model';
import { Subject } from 'rxjs';
import { ProductsService } from '../shared/products/products.service';

@Injectable({
  providedIn: 'root'
})
export class CartService{
  cartChanged = new Subject<ProductsModel[]>();

  cart:ProductsModel[]=[];

  getCart(){
    return this.cart.slice();
  }

  checkChart(){
    if(this.cart.length==0){
      return true;
    } else{
      return false;
    }
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
    const newProduct = { ...product};
    newProduct.amount = quantity;
    if (this.cart.length>0) {
      const ids = this.getIds();
      if(ids.includes(product.id)){
        let oldProd = this.getProduct(newProduct.name);
        oldProd.amount += newProduct.amount;
      }
      else{
        this.cart.push(newProduct);

      }     
    }else{
        this.cart.push(newProduct);

      }
     this.cartChanged.next(this.cart.slice());
  }
  getPrice(){
    let totalCartValue : number = 0;
    this.cart.forEach(element => {
      totalCartValue += element.price*element.amount;
    });
    return totalCartValue;
  }

  updateProductAmount(product: ProductsModel, quantity: number){
    this.getProduct(product.name).amount = quantity;
    this.cartChanged.next(this.cart.slice());
  }

  deleteProduct(product: string){
    const index = this.getCart().findIndex(x => x.name === product);
    this.cart.splice(index,1);
    this.cartChanged.next(this.cart.slice());

  }

  checkAmount(productName:string, amount: number){
    const productStock = this.productsService.getItem(productName).amount;
    if (productStock>=amount) {
      return true;
    } else{
      return false;
    }

  }


  constructor(private productsService: ProductsService) { }
}
