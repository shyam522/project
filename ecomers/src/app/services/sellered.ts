import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { login, singup } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root',
})
export class Sellered {
   private apiurl = "http://localhost:3000/seller"
  isSellerLoggedIn= new BehaviorSubject<boolean>(false)
  isloginError= new EventEmitter<boolean>(false)
constructor(private http:HttpClient , private router:Router){

}
userSignUp(data:singup){
   
 this.http.post("http://localhost:3000/seller",data,{observe:'response'}).subscribe((result)=>{
   this.isSellerLoggedIn.next(true);
   localStorage.setItem('seller',JSON.stringify(result.body))
    this.isloginError.emit(true)
   this.router.navigate(['seller-home'])
 })

}
reloadSeller(){
 
  if(localStorage.getItem('seller')){
 this.isSellerLoggedIn.next(true)
   this.router.navigate(['seller-home'])
  }
}

userlogin(data:login){
 this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
 {observe:'response'} 
).subscribe((result:any)=>{
  if(result && result.body.length){

      localStorage.setItem('seller',JSON.stringify(result.body))
    this.router.navigate(['seller-home'])
}else
{
  console.warn("login faild")
  this.isloginError.emit(true)
}
})
}

}
