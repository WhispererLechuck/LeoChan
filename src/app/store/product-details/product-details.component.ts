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
  errorFlag: boolean =false;

  constructor(
    private activatedRoute:ActivatedRoute, 
    private productsService: ProductsService,
    private cartService: CartService,
    private route: Router){}



    addItem(){
      if(this.value>0 || this.value != undefined){
        this.cartService.addProduct(this.product,this.value);
        this.route.navigate(['cart']);
      }
      else this.errorFlag = true;
    }

    ngOnInit(): void {
      this.activatedRoute.params.subscribe((params: Params) =>{

      const productName = params['id'];
      this.product = this.productsService.getItem(productName);
        });
    }
}
