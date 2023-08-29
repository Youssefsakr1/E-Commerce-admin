import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { AllProductsComponent } from '../products/components/all-products/all-products.component';
import { SelectComponent } from './components/select/select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsDetailsComponent } from '../products/components/products-details/products-details.component';




@NgModule({ 
  declarations: [
    HeaderComponent,  
    SpinnerComponent, 
    SelectComponent,
    
    
    
    

    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
    
    
    
  ],
  exports :[
    HeaderComponent,
    SpinnerComponent,
    SelectComponent,
    ReactiveFormsModule,
    FormsModule,
    
    
    
  ]
})
export class SharedModule { }
