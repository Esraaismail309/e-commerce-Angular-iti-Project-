import { CartService } from './../../cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  total:number
  constructor(private cartService: CartService) { }

  ngOnInit(): void {

    this.cartService.getProduct().subscribe(res => {
      this.total=0;      
      res.forEach((ele) => {
        this.total += ele.quantity
      });
    })
  } 

}


