import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScreenSizeService } from 'src/app/shared/screen-size/screen-size.service';

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

  @Output() productEmit = new EventEmitter<void>;


  navigateTo(child: Categorie){
    this.productEmit.emit();
    this.router.navigate([child.router],{relativeTo: this.activatedRoute});
  }

  constructor(
    private router: Router,
    private screenSizeService: ScreenSizeService,
    private activatedRoute: ActivatedRoute
  ){}

  categories: Categorie[] = [
    {
      name: 'Fresh Food',
      children:[
        {name: 'Meat',router:'freshmeat'},
        {name: 'Fish', router: 'freshfish'},
        {name: 'Fruits & Vegetables', router: 'veggies'},
      ]
    },
    {
      name: 'Bakery',
      children:[
        {name: 'Bread', router: 'bread'},
        {name: 'Sweets', router: 'sweets'},
        {name: 'Salted', router: 'salted'},
        {name: 'Cakes', router: 'cakes'},
      ]
    },
    {
      name: 'Frozen Food',
      children:[
        {name: 'Vegetables', router: 'frozenVeggies'},
        {name: 'Meat & Fish', router: 'frozenmeatfish'},
        {name: 'Pizzas', router: 'pizzas'},
        {name: 'Ice Creams', router: 'icecreams'},
      ]
    },
    {
      name: 'Drinks & Beverages',
      children:[
        {name: 'Water', router: 'water'},
        {name: 'Sodas', router: 'sodas'},
        {name: 'Liquors', router: 'liquors'},
        {name: 'Beers', router: 'beers'},
        {name: 'Wines', router: 'wines'},
      ]
    },
    {
      name: 'Food Cupboard',
      children:[
        {name: 'Pasta & Rice', router: 'pasttandrice'},
        {name: 'Salt and spices', router: 'spices'},
        {name: 'Oil', router: 'oil'},
      ]
    },
    {
      name: 'Health & Beauty',
      children:[
        {name: 'Shampoos', router: 'shampoos'},
        {name: 'Shower', router: 'shower'},
        {name: 'Conditioner', router: 'conditioner'},
        {name: 'Deodorants', router: 'deodorants'},
      ]
    },
    {
      name: 'Snacks & Treats',
      children:[
        {name: 'Chips', router: 'chips'},
        {name: 'Candies', router: 'candies'},
        {name: 'Chocolates', router: 'chocolates'},
        {name: 'Cereals', router: 'cereals'},
      ]
    },
    
]

screenSize!: string;
  productFlag: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenSize = this.screenSizeService.getScreenSize(); 
  }

  ngOnInit(): void {
    this.screenSize = this.screenSizeService.getScreenSize();
  }
}
