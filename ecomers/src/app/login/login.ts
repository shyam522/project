import { Component, inject, OnInit, } from '@angular/core';
import { Products } from '../services/products';
import { product } from '../data-type';
import { CommonModule } from '@angular/common';
import { Router,  } from '@angular/router';
import {  Count } from '../count';


@Component({
  selector: 'app-login',
  imports: [CommonModule,],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit{
  show=inject(Products)
  route=inject(Router)
 showproduct:undefined|product[]



 cartService=inject(Count)
 

  ngOnInit(): void {
    this.show.productlist().subscribe((data)=>{
     
  this.showproduct=data


    })
  }
  
addItem(item: product) {
alert("item has been selected")
  this.cartService.addToCart(item);
}
 
 
}
