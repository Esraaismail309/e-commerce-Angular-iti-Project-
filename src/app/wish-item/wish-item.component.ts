import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RemoveProduct } from 'store/counter/counter.action';

@Component({
  selector: 'app-wish-item',
  templateUrl: './wish-item.component.html',
  styleUrls: ['./wish-item.component.scss']
})
export class WishItemComponent implements OnInit {
  @Input() item: any
  wishList = []
  constructor(private store: Store<{ counter }>) { }

  ngOnInit(): void {
    this.store.select('counter').subscribe((data) => {
      this.wishList = data.producArr;
    })

  }
  removeItem(item) {
    let arr = this.wishList.filter((prod) => prod.id != item.id);
    this.store.dispatch(new RemoveProduct(arr))
  }
}


