import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{ HttpClient} from '@angular/common/http'
import { Products } from '../services/products';
import { product } from '../data-type';
import { Router } from '@angular/router';
@Component({
  selector: 'app-seller-alert',
  imports: [FormsModule],
  templateUrl: './seller-alert.html',
  styleUrl: './seller-alert.css',
})
export class SellerAlert implements OnInit {
  addproductmassage:string|undefined
  http=inject(HttpClient)
   route=inject(Router)
 product=inject(Products)
ngOnInit(): void {}
sanitizePrice(value:string):number {
  if(!value)return 0;
  const cleaned =value.replace(/[^0-9.]/g, '');
  return parseFloat(cleaned)  || 0;
}
clic(){
  this.addproductmassage="";
}
  submit(data:any){
    
    data.price = this.sanitizePrice(data.price)

    this.product.addproduct(data).subscribe((result)=>{
     if(result){
      this.addproductmassage="Products is successfully Added"
      this.route.navigate(['seller-home'])
    }
  })
    
  }
}
