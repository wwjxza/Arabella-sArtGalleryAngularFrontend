import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products: any  = [];
  public totalPrice: number = 0;
  public subTotal: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res => this.products = res);

    this.totalPrice = this.cartService.getTotalPrice();

    //this.subTotal = this.cartService.getSubTotal([(product)]);

  }

  getSubTotal(product: any): number{
    return this.cartService.getSubTotal(product);
  }

  removeItem(product: any): void{
    this.cartService.removeCartItem(product);
  }

  emptyCart(): void {
    this.cartService.removeAllCart();
  }

}
