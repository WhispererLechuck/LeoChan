import { Injectable } from '@angular/core';
import { ProductsModel } from './producs.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: ProductsModel[] = [
    {name: 'Steak',
    amount: 10,
    category: 'freshmeat'},
    {name: 'Bananas',
    amount: 12,
    category: 'veggies'},
    {name: '',
    amount: 0,
    category: ''
    },
    {name: '',
    amount: 0,
    category: ''
    },
    {name: '',
    amount: 0,
    category: ''
    },
    {name: '',
    amount: 0,
    category: ''
    },
    
  ];

  getProducts(){
    return this.products.slice();
  }
  getItem(name: string){
    const index = this.getProducts().findIndex(x => x.name ===name);
    return this.products[index];
  }

  getProductsCategory(category: string){
    const products: ProductsModel[] = [];
    this.getProducts().forEach(element => {
      if (element.category === category){
        products.push(element);
      }
    });
    return products;
  }


  constructor() { }
}
