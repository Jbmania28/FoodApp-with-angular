import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { HomeComponent } from './home/home.component';
import { LoginpageComponent } from './login-page/loginpage.component';
import { LogoutPageComponent } from './logout-page/logout-page.component';

import { SignupPageComponent } from './signup-page/signup-page.component';

const routes: Routes = [

  {
    path:'search/:searchItem',
   component:HomeComponent
  },
  {
   path:'tag/:tag', 
   component:HomeComponent
  },
  {
          path:'food/:id',
          component:FoodpageComponent
  },
  {
    path:'cart-page',
    component:CartPageComponent
  },
  {
    path:'login-page',
    component:LoginpageComponent  

  },
  {
          path:'logout-page',
          component:LogoutPageComponent
  },
  {
    path:'signup-page',
    component:SignupPageComponent
  },
{
    path:'', component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
