import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductsModel } from 'src/app/shared/products/producs.model';
import { ProductsService } from 'src/app/shared/products/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  name ?: string;
  products?: ProductsModel[];
  size!: number;

  navigateTo(productName: string){
    const productCat = this.productsService.getItem(productName).category;
    const routeProd : string = 'store/'+productCat+'/'+productName;
    this.route.navigate([routeProd],{});
  }
  ngOnInit(): void {
      this.activatedRoute.params.subscribe((params: Params) =>{
      this.name = params['search'];
      this.products = this.productsService.getProductsStarting(params['search']);
      this.size = this.getSize(this.products);
      }); 
    }
    getSize(products: ProductsModel[]){
      if(products != undefined || products != null){
        return Object.keys(products!).length;
      }
      return 0;
    }

  constructor(
    private route: Router,
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute
  ){}
}
