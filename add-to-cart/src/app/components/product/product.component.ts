import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public product: any;

  constructor(private api: ApiService, private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {

    const id:number = +this.route.snapshot.params['id']; // return of params is a string, using + to convert to a number
    // this.api.getProducts().subscribe(res => {
    //   const prods = res as any[];
    //   this.product = prods.find(x => x.id === id);
    // })


    this.api.getProduct(id).subscribe( res => {
      console.log(res);
      this.product = res;
    });
  }

  addtoCart(product: any) {
    this.cartService.addtoCart(product);
  }

  increase(product: any) {
    product.quantity += 1;
  }

  decrease(product: any) {
    product.quantity = (product.quantity === 1) ? 1: (product.quantity - 1);
  }

}
