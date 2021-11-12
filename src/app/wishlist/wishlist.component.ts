import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddProduct } from 'store/counter/counter.action';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishArray: any[] = []
  constructor(private store: Store<any>, private cartService: CartService) { }

  ngOnInit(): void {
    this.store.select('counter').subscribe((data) => {
      this.wishArray = data.producArr
    })
  }
 
}

