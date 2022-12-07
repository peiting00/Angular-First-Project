import { HttpClient } from '@angular/common/http';
import { Product } from './products';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  total: number = 0;

  constructor(private http: HttpClient) {}

  add(product: Product) {
    this.items.push(product);
    this.total = this.total+product.price;
  }

  getItems() {
    return this.items;
  }

  getTotal(){
    return this.total;
  }

  clear() {
    this.items = [];
    return this.items;
  }


  getShippingPrices() {
    return this.http.get<
      {
        type: string;
        price: number;
      }[]
    >('/assets/shipping.json');
  }
}
