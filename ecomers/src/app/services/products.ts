import { inject, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { product } from '../data-type';
@Injectable({
  providedIn: 'root',
})
export class Products {


   private baseUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }


deletes(id:number){
return this.http.delete(`http://localhost:3000/products/${id}`)

}


  addproduct(data: product) {

    return this.http.post('http://localhost:3000/products', data
    )
  }
   productlist() {

    return this.http.get<product[]>('http://localhost:3000/products',
    )
  }
  
  getproduct(id:string){
return this.http.get<product>(`http://localhost:3000/products/${id}`);
  }

  
  updateProduct(product:product){
return this.http.put<product>(`http://localhost:3000/products/${product.id}`,product)

  }
  
  searchproduct(query:string){
return this.http.get<product[]>(`http://localhost:3000/products?q=${query}`);
  }
placeOrder(orderData: any) {
  return this.http.post('http://localhost:3000/orders', orderData);
}



}
