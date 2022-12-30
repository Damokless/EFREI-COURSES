import { Component, Input, Output, EventEmitter } from '@angular/core';
import Product from '../Products/ProductsTypes';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() product!:Product
  @Output() changeText = new EventEmitter<boolean>()
  hover:boolean = false

  change(value:boolean){
    this.changeText.emit(value)
    this.hover = value
  }

  addCart(id:any, numberOf:any){
    localStorage.setItem(id, numberOf);
  }

  ngOnInit() {
    console.log(this.product)
  }
}
