import { Component } from '@angular/core';

interface Categorie{
  name:string,
  icon?:string,
  children?: Categorie[]
  router?:string
}

@Component({
  selector: 'app-store-categories',
  templateUrl: './store-categories.component.html',
  styleUrls: ['./store-categories.component.css']
})
export class StoreCategoriesComponent {
  categories: Categorie[] = [
    {
      name: 'Fresh Food',
      children:[
        {name: 'Meat',router:'meat'},
        {name: 'Fish', router: ''},
        {name: 'Fruit', router: ''},
      ]
    },
    {
      name: 'Bakery',
      children:[
        {name: 'Bread', router: ''},
        {name: 'Sweets', router: ''},
        {name: 'Salted', router: ''},
        {name: 'Cakes', router: ''},
      ]
    },
    {
      name: 'Frozen Food',
      children:[
        {name: 'Vegetables', router: ''},
        {name: 'Meat & Fish', router: ''},
        {name: 'Pizzas', router: ''},
        {name: 'Ice Creams', router: ''},
      ]
    },
    {
      name: 'Drinks & Beverages',
      children:[
        {name: 'Water', router: ''},
        {name: 'Sodas', router: ''},
        {name: 'Liquors', router: ''},
        {name: 'Beers', router: ''},
        {name: 'Wines', router: ''},
      ]
    },
    {
      name: 'Household',
      children:[
        {name: '', router: ''},
      ]
    },
    {
      name: 'Health & Beauty',
      children:[
        {name: 'Shampoos', router: ''},
        {name: 'Shower', router: ''},
        {name: 'Conditioner', router: ''},
        {name: 'Deodorants', router: ''},
        {name: '', router: ''},
      ]
    },
    {
      name: '',
      children:[
        {name: '', router: ''},
      ]
    },
    
]
}
