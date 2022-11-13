import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {
    path:"", 
    redirectTo:"products", 
    pathMatch:"full"
  },
  {
    path:"products",
    component: ProductsComponent,
  },
  {
    path:"products/:id",
    component: ProductComponent,
  },
  {
    path:"cart",
    component: CartComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
