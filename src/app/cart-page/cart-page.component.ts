import { Component } from '@angular/core';
import { products } from '../Products/products';


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  productList:any[]
  cart = localStorage
  tmpCart: any[] = []
  totalCart = 0
  constructor() {
    this.productList = products
    Object.entries(this.cart).forEach(item => {
      const [key, value] = item
      console.log(key, value)
      this.productList.forEach(product => {
        if (product.id == Number(key)) {
          console.log("g trouvé " + product.name + " " + value + " fois mon gars")
          product.number = Number(value)
          product.totalPrice = product.number * Number(product.specifications.price.split("$")[0])
          this.totalCart += product.totalPrice
          this.tmpCart.push(product)
        }
      })
    })
    console.log(this.tmpCart)
 }

 addProduct(id:number) {
  const product = this.tmpCart.find(x => x.id === id)
  const index = this.tmpCart.findIndex(x => x.id === id)
  product.number += 1
  this.totalCart += Number(product.specifications.price.split("$")[0])
  product.totalPrice = product.number * Number(product.specifications.price.split("$")[0])
  this.tmpCart[index] = product
  localStorage.setItem(id.toString(), product.number)
 }
 removeProduct(id:number) {
  const product = this.tmpCart.find(x => x.id === id)
  const index = this.tmpCart.findIndex(x => x.id === id)
  product.number -= 1
  this.totalCart -= Number(product.specifications.price.split("$")[0])
  product.totalPrice = product.number * Number(product.specifications.price.split("$")[0])
  this.tmpCart[index] = product
  localStorage.setItem(id.toString(), product.number)
  if (product.number === 0) {
    this.tmpCart.splice(index, 1)
    localStorage.removeItem(id.toString())
  }
}
}
