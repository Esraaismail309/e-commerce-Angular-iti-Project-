import { UserModule } from './user/user.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ValidateEqualModule } from 'ng-validate-equal';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from './shared/shared.module';

//components
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailesComponent } from './product-detailes/product-detailes.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { WishItemComponent } from './wish-item/wish-item.component'; 
import { LoaderComponent } from './loader/loader.component';
//store
import { RequestInterceptor } from './request.interceptor';
import { productReducer } from 'store/counter/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductCardComponent,
    ProductDetailesComponent,
    CartComponent,
    HomeComponent,
    WishlistComponent,
    WishItemComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ValidateEqualModule,
    HttpClientModule,
    SharedModule,
    UserModule,
     StoreModule.forRoot({ counter: productReducer })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
