import { Component, Output, EventEmitter } from '@angular/core';
import Product from '../Products/ProductsTypes';
import { products } from '../Products/products';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})

export class ItemsListComponent {
  productList:Product[]
  @Output() changeText = new EventEmitter<boolean>()
  changeTextParent(value:any) {
    this.changeText.emit(value)
  }
  constructor() {
    this.productList = products
 }
}
