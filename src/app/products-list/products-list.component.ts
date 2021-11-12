import { ProductsService } from './../products.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  @ViewChild(ProductCardComponent) childComponent: any;
  productArr: any;
  constructor(private router: Router, private productsService: ProductsService,) { }
  ngOnInit(): void {
    this.productsService.getProductsList().subscribe(
      data => {
        this.productArr = data        
        this.productArr.forEach((ele: any) => {
          Object.assign(ele, { quantity: 1, total: ele.price })
        });
      })
  }
  
  reciveData(product: any) {
    this.router.navigate([`item/${product.id}`]);
  }

}


