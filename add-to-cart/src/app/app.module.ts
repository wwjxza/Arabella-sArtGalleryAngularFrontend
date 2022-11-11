import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { BuildingsComponent } from './components/buildings/buildings.component';
import { SpaceComponent } from './components/space/space.component';
import { PlantsComponent } from './components/plants/plants.component';
import { OthersComponent } from './components/others/others.component';
import { ProductComponent } from './components/product/product.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    NavigationComponent,
    FooterComponent,
    AnimalsComponent,
    BuildingsComponent,
    SpaceComponent,
    PlantsComponent,
    OthersComponent,
    ProductComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
