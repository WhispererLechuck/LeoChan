import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductsModel } from 'src/app/shared/products/producs.model';
import { ProductsService } from 'src/app/shared/products/products.service';
import { ScreenSizeService } from 'src/app/shared/screen-size/screen-size.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  constructor(
    private activatedRoute:ActivatedRoute, 
    private productsService: ProductsService,
    private route: Router,
    private screenSizeService: ScreenSizeService){}

  name?: string;
  products!: ProductsModel[];
  itemsPerPage: number = 6;
  currentPage: number = 1;
  page?: number;

  navigateTo(productName: string){
    this.route.navigate([productName],{relativeTo: this.activatedRoute});
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) =>{
      this.name = params['name'];
      if(!this.productsService.isCategory(this.name!)){
        this.route.navigate(['notFound'],{relativeTo: this.activatedRoute.parent});

      }      
      this.products = this.productsService.getProductsCategory(params['name']);
      });
      this.screenSize = this.screenSizeService.getScreenSize();
      this.setDisplay();
  }

  setDisplay(){
    if(this.screenSize == 'mobile'){
      this.itemsPerPage = 6; 
    } else{
      this.itemsPerPage = 6; 
    }

  }

  screenSize!: string;
  productFlag: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenSize = this.screenSizeService.getScreenSize(); 
    this.setDisplay();
  }
  

}
