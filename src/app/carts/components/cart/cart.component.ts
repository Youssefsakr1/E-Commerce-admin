import { Component, OnInit } from '@angular/core';
import { CartsService } from '../../services/carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
// [x: string]: any;
// cartproducts: any;
constructor(private service:CartsService) { }
cartproducts:any[] = [ ]
total:any = 0
success:boolean = false
ngOnInit(): void {
  this.getCartProducts()

}

getCartProducts() {
  if("cart" in localStorage) {
    this.cartproducts = JSON.parse(localStorage.getItem("cart")!)
}
this.getCartProducts()
}
// addAmount(index:number) {
//   this.getCartProducts()
//   this.cartproducts[index].quantity++
//   localStorage.setItem("cart" , JSON.stringify(this.cartproducts))
// }
// minsAmount(index:number) {
//   this.getCartProducts()

//   this.cartproducts[index].quantity--
//   localStorage.setItem("cart" , JSON.stringify(this.cartproducts))
// }
  deletProduct(index:number) {
    this.cartproducts.splice(index, 1);
    this.getCartTotal()
    localStorage.setItem("cart" , JSON.stringify(this.cartproducts))

  }
  // detectChange() {
  //   this.getCartTotal()
  //   localStorage.setItem("cart" , JSON.stringify(this.cartproducts))
  // }
clearCart(){
  this.cartproducts = []
  this.getCartTotal()
  localStorage.setItem("cart" , JSON.stringify(this.cartproducts))

}
getCartTotal() {
this.total = 0 
for(let x in this.cartproducts){
this.total +=this.cartproducts[x].item.price * this.cartproducts[x].quantity;
localStorage.setItem("cart" , JSON.stringify(this.cartproducts))

}}
addCart() {
  let products  = this.cartproducts.map((item:any) => {
    return{productId:item.item.id , quantity:item.quantity}
  })
  let Model = {
    userId:5,
    date: new Date(), 
    products: products
  }

  this.service.createNewCart(Model).subscribe((res:any) =>{
    this.success = true
  })

  console.log(Model)
}
minusAmount(index:number){
  this.getCartProducts()
  this.cartproducts[index].quantity--
  localStorage.setItem("cart" , JSON.stringify(this.cartproducts))
}
addAmount(index:number){
  this.getCartProducts()
  this.cartproducts[index].quantity++
  localStorage.setItem("cart" , JSON.stringify(this.cartproducts))
}
detectChange(){ 
  /* Update local storage */
  this.getCartTotal()
  localStorage.setItem("cart" , JSON.stringify(this.cartproducts))
}
}
