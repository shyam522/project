import { HttpClient } from '@angular/common/http';
import { inject, Injectable,EventEmitter} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { login } from '../data-type';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserAuth {
router=inject(Router)
http=inject(HttpClient)
 isSellerLoggedIn= new BehaviorSubject<boolean>(false)
  isloginError= new EventEmitter<boolean>

   apiUrl = 'http://localhost:3000/user';

 

   usersingup(data:login)
   { this.http.post("http://localhost:3000/user",data,{observe:'response'}).subscribe((result)=>{
   this.isSellerLoggedIn.next(true);
   localStorage.setItem('user',JSON.stringify(result.body))
  this.isloginError.emit(true)
   this.router.navigate(['/'])
 })}

 reloadSeller(){
 
  if(localStorage.getItem('user')){
 this.isSellerLoggedIn.next(true)
   this.router.navigate(['/'])
  }
}


userlogin(data:login){
 this.http.get(`http://localhost:3000/user?email=${data.email}&password=${data.password}`,
 {observe:'response'} 
).subscribe((result:any)=>{
  if(result && result.body.length){

      localStorage.setItem('user',JSON.stringify(result.body))
    this.router.navigate(['/'])
}else
{
  console.warn("login faild")
  this.isloginError.emit(true)
}
})
}


}
