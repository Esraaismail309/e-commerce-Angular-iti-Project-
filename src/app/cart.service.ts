import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItemList: any = []
  repeatedItem
  private productList = new BehaviorSubject<any>([])

  constructor() { }
  getProduct() {
    return this.productList.asObservable();
  }
  addToCart(product) {
 if (this.cartItemList.includes(product)) {
      this.repeatedItem = this.cartItemList[this.cartItemList.indexOf(product)]
      this.repeatedItem.quantity =this.repeatedItem.quantity +1
      
    }
    else {
      this.cartItemList.push(product)
      this.productList.next(this.cartItemList)
      this.getTotalPrice()
    }
  }

  removeItem(product) {
    this.cartItemList.filter((ele, i) => {
      if (product.id === ele.id) {
        this.cartItemList.splice(i, 1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  getTotalPrice() {
    let totalPrice = 0;
    this.cartItemList.map((ele) => {
      totalPrice += ele.price * ele.quantity
  
    })
    return totalPrice
  }


}
