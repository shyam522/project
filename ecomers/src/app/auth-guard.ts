import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Sellered } from './services/sellered';



export const authGuard: CanActivateFn = (route, state) => {
  const sellerservice=inject(Sellered)
  if(localStorage.getItem('seller')){
    return true 

  }
  return sellerservice.isSellerLoggedIn;
  
};
