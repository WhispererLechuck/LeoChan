import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products/products.service';
import { ProductsModel } from '../products/producs.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  flagInput: boolean = false;
  search?: string;
  productList: ProductsModel[] = this.productsService.getProducts();

  onEnter() {
    this.flagInput = false;
    if(this.search){
      this.router.navigate(['search/'+this.search])
      this.search = '';
    } else {
      this.flagInput = true;
    }
    
  }

  navitateProfile(){
    const router = this.router;
    const user = localStorage.getItem('localUser');
    if (user) {
      router.navigate(['profile']);      
    } else {
      router.navigate(['auth']);          
    }
  }

  ngOnInit(): void {
    
  }
  constructor(
    private router: Router,
    private productsService: ProductsService) {}
}
