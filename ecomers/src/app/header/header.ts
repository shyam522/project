import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, Router } from "@angular/router";
import { CommonModule } from '@angular/common';
import { product } from '../data-type';
import { Products } from '../services/products';

import { Count } from '../count';
import { Sellered } from '../services/sellered';
import { json } from 'stream/consumers';



@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  sellerName: string = '';
  menutype: string = 'default'
  sellerservice = inject(Sellered)
  productservice = inject(Products)
  route = inject(Router)
  userName: string = '';
  cartCount: number = 0;
  searchresult: undefined | product[]
  cartService = inject(Count)

  ngOnInit(): void {
    this.cartService.getCount().subscribe(count => {
      this.cartCount = count;
    });
    this.route.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
          this.menutype = 'seller';
          if (localStorage.getItem('seller')) {
            let sellerStore = localStorage.getItem('seller');
            let sellerData = sellerStore && JSON.parse(sellerStore)[0];
            this.sellerName = sellerData.name
          }
        } else if (localStorage.getItem('user')) {
          let userstore = localStorage.getItem('user')
          if(userstore){
           
            let parsedData = JSON.parse(userstore)
            
          let userdata = Array.isArray(parsedData)? parsedData[0] : parsedData;
          this.userName = userdata.name
          this.menutype = 'user'

}
        } else {

          this.menutype = 'default'
        }
      }
    })
  }
  logout() {
    localStorage.removeItem('seller')
    this.cartCount = 0
    this.route.navigate(['/'])
    this.cartService.clearCart()
  }
  userlogout() {
    localStorage.removeItem('user')
    this.cartCount = 0
    this.route.navigate(['/'])
    this.cartService.clearCart()
  }

  searchproduct(query: KeyboardEvent) {
    if (query) {
      const element = query.target as HTMLInputElement
      this.productservice.searchproduct(element.value).subscribe((result) => {
        console.warn(result)

      })
    }
  }



}
