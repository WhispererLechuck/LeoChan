import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.css']
})
export class TypingComponent implements OnInit, OnDestroy {

  leochanis: string = 'LeoChan is'

  arraySentences: string[] = [ 
    "your Supermarket", 
    "a place were dreams come true", 
    "your family",
    "your favorite supplier", 
    "a fantastic place to work", 
  ];
  
  // Current sentence being processed
   _PART = 0;
  
  // Character number of the current sentence being processed 
   _PART_INDEX = 0;
  
  // Holds the handle returned from setInterval
   private _INTERVAL_VAL: any;
  
  // Element that holds the text
  //  _ELEMENT = document.querySelector("#text");
   @ViewChild('text') _ELEMENT!:ElementRef;
  
  // Cursor element 

  @ViewChild('cursor') _CURSOR!:ElementRef;
  //  _CURSOR = document.querySelector("#cursor");
  
  // Implements typing effect
   typeFunction = () =>{ 
    // Get substring with 1 characater added
    var text =  this.arraySentences[this._PART].substring(0, this._PART_INDEX + 1);
    // console.log(text)
    // _ELEMENT.innerHTML = text;
    this._ELEMENT.nativeElement.innerHTML = text;
    this._PART_INDEX++;
  
    // If full sentence has been displayed then start to delete the sentence after some time
    if(text === this.arraySentences[this._PART]) {
      // Hide the cursor
      // this._CURSOR.nativeElement.style.display = 'none';
  
      clearInterval(this._INTERVAL_VAL);
      setTimeout(()=> {
        this._INTERVAL_VAL = setInterval(this.deleteFunction, 50);
      }, 1000);
    }
  }
  
  // Implements deleting effect
   deleteFunction =() =>{
    // Get substring with 1 characater deleted
    var text =  this.arraySentences[this._PART].substring(0, this._PART_INDEX - 1);
    this._ELEMENT.nativeElement.innerHTML = text;
    this._PART_INDEX--;
  
    // If sentence has been deleted then start to display the next sentence
    if(text === '') {
      clearInterval(this._INTERVAL_VAL);
  
      // If current sentence was last then display the first one, else move to the next
      if(this._PART == (this.arraySentences.length - 1))
        this._PART = 0;
      else
        this._PART++;
      
      this._PART_INDEX = 0;
  
      // Start to display the next sentence after some time
      setTimeout(()=> {
        this._CURSOR.nativeElement.style.display = 'inline-block';
        this._INTERVAL_VAL = setInterval(this.typeFunction, 100);
      }, 200);
    }
  }
  
//   // Start the typing effect on load
//   _INTERVAL_VAL = setInterval(typeFunction, 100);
ngOnInit(): void {
  this.typeFunction = this.typeFunction.bind(this);
  this.deleteFunction = this.deleteFunction.bind(this);
  this._INTERVAL_VAL = setInterval(this.typeFunction, 100);
}
ngOnDestroy(): void {
  // console.log('leaving');
  clearInterval(this._INTERVAL_VAL);
}

}
