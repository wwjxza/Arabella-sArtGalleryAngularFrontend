import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalsComponent } from './components/animals/animals.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { BuildingsComponent } from './components/buildings/buildings.component';
import { SpaceComponent } from './components/space/space.component';
import { PlantsComponent } from './components/plants/plants.component';
import { OthersComponent } from './components/others/others.component';
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
  {
    path:"animals",
    component: AnimalsComponent,
  },
  {
    path:"buildings",
    component: BuildingsComponent,
  },
  {
    path:"space",
    component: SpaceComponent,
  },
  {
    path:"plants",
    component: PlantsComponent,
  },
  {
    path:"others",
    component: OthersComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
