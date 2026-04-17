import { Component, OnInit, inject } from '@angular/core';
import { product } from '../data-type';
import { Count } from '../count';
import { CommonModule } from '@angular/common';
import { Products } from '../services/products';
import { Router } from '@angular/router';
import { UserAuth } from '../services/user-auth';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css'],
})
export class Cart implements OnInit {
route=inject(Router)
  cartItems: any[] = [];
  cartService = inject(Count);
productService = inject(Products);
userservice =inject(UserAuth)
  totalPrice: number = 0;
  totalQty: number = 0;
  diplay=true
address: undefined| any


  ngOnInit(): void {
    this.cartService.getItems().subscribe((data) => {
      this.cartItems = data;
      this.calculateTotal();
    });
  }

  increase(id: number) {
    this.cartService.increaseQty(id);
  }

  decrease(id: number) {
    this.cartService.decreaseQty(id);
  }

  delete(id: number) {
    this.cartService.removeItem(id);
  }

  calculateTotal() {
    this.totalPrice = 0;
    this.totalQty = 0;

    this.cartItems.forEach(item => {
      this.totalPrice += item.price * item.quantity;
      console.warn(this.totalPrice)
      this.totalQty += item.quantity;
    });
  }

orderNow() {
if(!localStorage.getItem('user')){
this.route.navigate(["user"])
}else{

  const orderData = {
    items: this.cartItems,
    totalPrice: this.totalPrice,
    totalQty: this.totalQty,
    date: new Date()
  };

  this.productService.placeOrder(orderData).subscribe((res) => {
    alert("Order Placed Successfully ✅");
this.route.navigate(["/"])
    // cart empty kar do after order
    this.cartItems = [];
    this.totalPrice = 0;
    this.totalQty = 0;
    this.cartService.clearCart()
  });
}

}
show(){
  this.diplay=!this.diplay
}
Address(data:any){
this.cartService.address(data).subscribe((res)=>{
  console.log("order placed")
})
}


showAddres(data:any){
this.cartService.showaddress(data).subscribe((res)=>{
this.address = res
})

}
}