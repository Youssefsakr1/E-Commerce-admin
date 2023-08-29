import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  getAllproduct(){
    return this.http.get(' https://fakestoreapi.com/products' , )
  }

  getAllCategories(){
    return this.http.get(' https://fakestoreapi.com/products/categories' , )
  }
  getproductsBycategory(keyword:string){
    return this.http.get(`https://fakestoreapi.com/products/category/${keyword}`)
  }

  getproductById(id:any){
    return this.http.get(' https://fakestoreapi.com/products/'+id , )
  }
}
