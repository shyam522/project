import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Seller } from './seller/seller';
import { Cart } from './cart/cart';
import { Login } from './login/login';
import { SellerHome } from './seller-home/seller-home';
import { authGuard } from './auth-guard';
import { PageNotFound } from './page-not-found/page-not-found';
import { SellerAlert } from './seller-alert/seller-alert';
import { SellerUpdateProduct } from './seller-update-product/seller-update-product';
import { Search } from './search/search';
import { User } from './user/user';



export const routes: Routes = [
    {
        path:'',
        component:Home

    },
     {
        path:'seller',
        component:Seller

    }, {
        path:'cart',
        component:Cart

    } , {
        path:'login',
        component:Login

    }, {
        path:'user',
        component:User

    },
    {
        path:'seller-home',
        component:SellerHome,
        canActivate:[authGuard]

    },
       {
        path:'seller-alert',
        component:SellerAlert,
         canActivate:[authGuard]

    },
    {
        path:'seller-update-product/:id',
        component:SellerUpdateProduct,
        canActivate:[authGuard]
    },
    {
        path:'search/:query',
        component:Search,

    },
  
    {
        path:'**',
        component:PageNotFound,
        

    }

];
