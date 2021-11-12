import { CartService } from './../cart.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddProduct } from 'store/counter/counter.action';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: any;
  list;

  producrList;
  constructor(private cartService: CartService, private store: Store<{ counter }>) { }
  ngOnInit(): void {
    this.store.select('counter').subscribe((data) =>
      (this.list = data.producArr) )
  }

  addToWish(product) {
    let prod = this.list.findIndex(
      (item) => item.id == product.id
    );
    if (prod == -1) {
      this.store.dispatch(new AddProduct(product));
    }
    else {
      alert("this item already found")
    }
  }
  addToCart(item) {
    this.cartService.addToCart(item)
  }
}



