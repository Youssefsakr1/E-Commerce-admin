import { Component , OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { product } from '../product/models/product';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent  implements OnInit {
  
  products:product [] = []
  categories:string[] = []
  loading:boolean = false
  cartProducts:any [] = []
  constructor(private service:ProductsService) {}

  ngOnInit(): void {
      this.getproducts()
      this.getCategories()
  }

    getproducts() {
      this.loading = true
    this.service.getAllproduct().subscribe((res:any) => {
      this.products = res
      this.loading = false
    } , error => { 
      this.loading = false
      alert(error)
    }   )
  }

  getCategories() {
    this.loading = true
    this.service.getAllCategories().subscribe((res:any) => {
      this.categories = res
      this.loading = false
    } , error => { 
      this.loading = false
      alert(error)
    })
  }

  filterCategory(event:any) {
    let value = event.target.value;
    (value == "all") ? this.getCategories : this.getproductscategory(value)
      
    }
  getproductscategory(keyword:string){
    this.service.getproductsBycategory(keyword).subscribe((res:any) => {

      this.loading = false
      this.products = res
    })
}

addToCart(event:any) { 
 if("cart" in localStorage) {
  this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
  let exist = this.cartProducts.find(item =>  item.id == event.item.id)
  if(exist) {
    alert("product is already in your cart")
  }else{
    this.cartProducts.push(event)
  localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
  }
 }else{
  this.cartProducts.push(event)
  localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
 }
}
}