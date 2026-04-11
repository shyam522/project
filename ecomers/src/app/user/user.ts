import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuth } from '../services/user-auth';
import { login, singup } from '../data-type';

@Component({
  selector: 'app-user',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit {
  route = inject(Router)
  users = inject(UserAuth)
  showlogin = true;

  authError: string = '';


  userlogins(data: login):void{ 
  this.users.userlogin(data)
    this.users.isloginError.subscribe((isError)=>{
      if(isError){
        this.authError="Login Failed "

      }
    })
  }
  
  



  usersingup(data: singup) {
      this.users.usersingup(data);
     this.authError="Success"
  
  }

  ngOnInit(): void {
this.users.reloadSeller()

  }













  openlogin() {
    this.showlogin = !this.showlogin
  }
}
