import { Component, inject, OnInit } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit{

route=inject(Router)
ngOnInit(): void {
 
}
  shop(){
this.route.navigate(['login']);

  }
 

 
}
