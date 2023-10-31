import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { ProductsModel } from 'src/app/shared/products/producs.model';
import { ProductsService } from 'src/app/shared/products/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  product!: ProductsModel;
  @ViewChild('num') num !: ElementRef;
  value!: any;
  errorMessage?: string;
  popUpFlag: boolean = false;

  constructor(
    private activatedRoute:ActivatedRoute, 
    private productsService: ProductsService,
    private cartService: CartService,
    private route: Router){}

    closeError(){
      this.errorMessage = '';
    }
    closePop(){
      this.popUpFlag = false;
    }

    addItem(){
      if(this.value>0 || this.value != undefined){
        if(this.cartService.checkAmount(this.product.name,this.value) && this.value > 0){
          this.cartService.addProduct(this.product,this.value);
          this.popUpFlag = true;
          // this.route.navigate(['cart']);
        }else{
          this.errorMessage = 'The amount selected is not in our stock.'
        }
      }
      else this.errorMessage = 'Enter a valid amount';
    }

    ngOnInit(): void {
      this.activatedRoute.params.subscribe((params: Params) =>{

      const productName = params['id'];
      this.product = this.productsService.getItem(productName);
        });
    }
}
