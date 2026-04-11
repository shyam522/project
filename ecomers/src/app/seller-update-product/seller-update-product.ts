import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { product } from '../data-type';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../services/products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-update-product',
  imports: [FormsModule],
  templateUrl: './seller-update-product.html',
  styleUrl: './seller-update-product.css',
})
export class SellerUpdateProduct implements OnInit {
  rou = inject(ActivatedRoute)
  productmassage: undefined | string;
  productservice = inject(Products)
  productdata: undefined | product
  routerss = inject(Router)
  ngOnInit(): void {
    let productid = this.rou.snapshot.paramMap.get('id')

    productid && this.productservice.getproduct(productid).subscribe((data) => {

      this.productdata = data

    })
  }
  submit(data: product) {
    if (this.productdata) {
      data.id = this.productdata.id;
    }
    this.productservice.updateProduct(data).subscribe((result) => {

      if (result) {
        this.productmassage = "product update";
        this.routerss.navigate(['seller-home'])
      }
    });

  }
}
