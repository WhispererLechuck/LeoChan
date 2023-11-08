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

  search?: string;
  productList: ProductsModel[] = this.productsService.getProducts();

  onEnter() {
    if(this.search != undefined || this.search === ''){
      this.router.navigate(['search/'+this.search])
      this.search = '';
    } else {
      alert("valor invalido imbesil")
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
