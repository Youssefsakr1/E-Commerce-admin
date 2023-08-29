import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { SpinnerComponent } from '../shared/components/spinner/spinner.component';
import { ProductComponent } from './components/product/product.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AllProductsComponent,
    ProductsDetailsComponent,
        ProductComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule,
    RouterModule,
    AppRoutingModule,
    

    
]
})
export class ProductsModule { }
