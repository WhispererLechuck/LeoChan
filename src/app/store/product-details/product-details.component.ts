import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductsModel } from 'src/app/shared/products/producs.model';
import { ProductsService } from 'src/app/shared/products/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  product?: ProductsModel;

  constructor(
    private activatedRoute:ActivatedRoute, 
    private productsService: ProductsService,
    private route: Router){}

    ngOnInit(): void {
      this.activatedRoute.params.subscribe((params: Params) =>{

      const productName = params['productName'];
      this.product = this.productsService.getItem(productName);
        });
    }
}
