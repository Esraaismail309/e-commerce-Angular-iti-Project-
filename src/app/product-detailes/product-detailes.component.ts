import { CartService } from './../cart.service';
import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detailes',
  templateUrl: './product-detailes.component.html',
  styleUrls: ['./product-detailes.component.scss']
})
export class ProductDetailesComponent implements OnInit {
  productArr
  detailes
  constructor(private activeRoute: ActivatedRoute, private productsService: ProductsService, private cartService: CartService) { }

  ngOnInit(): void {

    this.activeRoute.params.subscribe(params => {
      this.productsService.getProductsDetailes(params.id).subscribe(
        data => {
          this.detailes = data
        })
    })

  }
  addToCart(item) {
    this.cartService.addToCart(item)
  }
}
