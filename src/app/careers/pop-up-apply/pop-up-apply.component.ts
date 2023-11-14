import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pop-up-apply',
  templateUrl: './pop-up-apply.component.html',
  styleUrls: ['./pop-up-apply.component.css']
})
export class PopUpApplyComponent {
  @Output() closingPop = new EventEmitter<void>;

  closePop(){
    this.closingPop.emit();
  }

}
