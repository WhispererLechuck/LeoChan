import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsModel } from 'src/app/shared/products/producs.model';

@Component({
  selector: 'app-popup-add',
  templateUrl: './popup-add.component.html',
  styleUrls: ['./popup-add.component.css']
})
export class PopupAddComponent {
  goCart() {
    this.router.navigate(['cart'])
  }
  @Input() product!: ProductsModel;
  @Input() amount!: number;

  @Output() close = new EventEmitter<void>;

  closePop(){
    this.close.emit();
  }

  constructor(private router: Router){}
}
