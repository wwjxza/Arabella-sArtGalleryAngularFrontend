import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: any[] = [];
  public productList = new BehaviorSubject<any>([]);

  constructor() { }


  // getter
  getProducts():Observable<any>{
    return this.productList.asObservable();
  }

  // setter
  // setProduct(product: any) {
  //   this.cartItemList.push(...product);
  //   this.productList.next(product);
  // }

  addtoCart(product: any) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    //console.log(this.cartItemList);
  }

  getSubTotal(product: any): number {
    let subTotal: number = 0;
    subTotal = product.price * product.quantity;
    return parseFloat(subTotal.toFixed(2));
  }

  getTotalPrice(): number {
    let totalPrice: number = 0;
    this.cartItemList.map((a:any) => {
      totalPrice += a.price * a.quantity;
    })
    return parseFloat(totalPrice.toFixed(2));
  }
  // toFixed(param): returns a string.
  // parseFloat(param): convert from strings to numbers

  removeCartItem(product: any) {
    this.cartItemList.map((a:any, index: any) => {
      if(product.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    })
    // to update the cart after remove any product
    this.productList.next(this.cartItemList);
  }

  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
     // to update the cart after remove any product
    this.productList.next(this.cartItemList);   
  }

}
