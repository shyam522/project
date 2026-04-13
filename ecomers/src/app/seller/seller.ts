

import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Sellered } from '../services/sellered';
import { Router } from '@angular/router';
import { login, singup } from '../data-type';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-seller',
  imports: [FormsModule , CommonModule],
  templateUrl: './seller.html',
  styleUrl: './seller.css',
})
export class Seller implements OnInit {
  showlogin = true;
  authError:string= ''; 
  constructor(private seller: Sellered, private router:Router) {}
  ngOnInit(): void{
    this.seller.reloadSeller()
  }
  
  openlogin() {
    this.showlogin = !this.showlogin
      this.authError=" "
  }
  singup(data:singup): void {
      this.seller.userSignUp(data);
     this.authError="Success"
  }
  login(data:login): void { 
  this.seller.userlogin(data)
    this.seller.isloginError.subscribe((isError)=>{
      if(isError){
        this.authError="Login Failed "

      }
    })
  }
  inputetxt(){
        this.authError=" "
  }
  
}
