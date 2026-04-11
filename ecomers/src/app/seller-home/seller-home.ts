import { Component, inject, OnInit } from '@angular/core';
import { Products } from '../services/products';
import { product } from '../data-type';
import { CommonModule } from '@angular/common';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from "@angular/router";
import { Router } from '@angular/router';
@Component({
  selector: 'app-seller-home',
  imports: [CommonModule, FontAwesomeModule, RouterLink],
  templateUrl: './seller-home.html',
  styleUrl: './seller-home.css',
})
export class SellerHome implements OnInit {
  productlist: undefined | product[]
  product = inject(Products)
  route = inject(Router)
  deleteproduct: undefined | string
  icon = faTrash;
  faedit = faEdit;
  delete(id: number) {
    console.warn("text id", id)
    this.product.deletes(id).subscribe((result) => {
      if (result) {
        this.deleteproduct = "Item Has Been Deleted"
        this.productli()
      }

    })
    setTimeout(() => {
      this.deleteproduct
    }, 3000);


  }

  ngOnInit(): void {
    this.productli()

  }
  productli() {
    this.product.productlist().subscribe((result) => {
      this.productlist = result
      console.warn(result)


    })

  }


}
