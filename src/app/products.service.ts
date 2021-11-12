import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
HttpClient
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) { }


  getProductsDetailes(id){
    return this.http.get(`https://fakestoreapi.com/products/${id}`)
  }
  getProductsList() {
    return this.http.get('https://fakestoreapi.com/products')
    
  }
}
