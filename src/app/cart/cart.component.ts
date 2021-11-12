import { LogInService } from './../log-in.service';
import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  islogged: boolean
  allProducts = []
  product = 0
  totalPrice

  constructor(private cartService: CartService, private logInService: LogInService) { }

  ngOnInit(): void {
    this.logInService.getLoggedIn().subscribe((value) => (this.islogged = value))

    this.cartService.getProduct().subscribe(data => {
      this.allProducts = data;
      this.totalPrice = this.cartService.getTotalPrice();      
    })
  }

  removeItem(item) {
    this.cartService.removeItem(item)
  }

}
