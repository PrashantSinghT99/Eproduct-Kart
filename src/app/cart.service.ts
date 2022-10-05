import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CartService {

  //items array
  items: Product[] = [];
  
//method to add new component to the cart
  addToCart(product: Product) {
    this.items.push(product);
  }
//method for fetching the cart items
  getItems() {
    return this.items;
  }
//method for emptying the cart
  clearCart() {
    this.items = [];
    return this.items;
  }
  //method to get shipping prices with http from json file
  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

  constructor(private http:HttpClient) {}
}
