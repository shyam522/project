import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { product } from './data-type';
import { Products } from './services/products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Count {


http=inject(HttpClient)
  
  private cartCount = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCount.asObservable();

  private cartItems = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItems.asObservable();

  private items: any[] = [];
productService = inject(Products);

  addToCart(product: product) {
    let existing = this.items.find(p => p.id === product.id);

    if (existing) {
      existing.quantity++;
    } else {
      this.items.push({ ...product, quantity: 1 });
    }

    this.updateCart();
  }

 
  increaseQty(id: number) {
    let item = this.items.find(p => p.id === id);
    if (item) item.quantity++;
    this.updateCart();
  }

  decreaseQty(id: number) {
    let item = this.items.find(p => p.id === id);
    if (item && item.quantity > 1) {
      item.quantity--;
    }
    this.updateCart();
  }


  removeItem(id: number) {
    this.items = this.items.filter(item => item.id !== id);
    this.updateCart();
  }


  private updateCart() {
    this.cartItems.next(this.items);
    this.cartCount.next(this.items.reduce((sum, item) => sum + item.quantity, 0));
  }

  getItems() {
    return this.cartItems$;
  }
clearCart() {
  this.items = [];
  this.cartItems.next([]);
  this.cartCount.next(0);
}
  getCount() {
    return this.cartCount$;
  }

}