//modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// component
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { LogInComponent } from './user/log-in/log-in.component';
import { RegisterComponent } from './user/register/register.component';
import { ProductDetailesComponent } from './product-detailes/product-detailes.component';
import { ProductCardComponent } from './product-card/product-card.component';
//guard
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "product-card/:id",
    component: ProductCardComponent
  },
  {
    path: "product-detailes/:id",
    component: ProductDetailesComponent
  },
  {
    path: "cart",
    component: CartComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "log-in",
    component: LogInComponent
  },
  {
    path: "**",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
