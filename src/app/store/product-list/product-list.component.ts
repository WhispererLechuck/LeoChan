import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductsModel } from 'src/app/shared/products/producs.model';
import { ProductsService } from 'src/app/shared/products/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  constructor(
    private activatedRoute:ActivatedRoute, 
    private productsService: ProductsService,
    private route: Router){}
  name?: string;
  products?: ProductsModel[];

  navigateTo(productName: string){
    this.route.navigate([productName],{relativeTo: this.activatedRoute});
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) =>{
      this.name = params['name'];
      this.products = this.productsService.getProductsCategory(params['name']);
      });
  }

}
