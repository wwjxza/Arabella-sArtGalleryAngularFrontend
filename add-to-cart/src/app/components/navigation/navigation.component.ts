import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public itemsAmt: number = 0;
  public searchItem: string = '';


  constructor(private cartService: CartService, private apiService: ApiService) { }

  ngOnInit(): void {

    // this.cartService.getProducts().subscribe((res) => {
    //   this.itemsAmt = res.length;
    // });

    this.cartService.getProducts().subscribe(res => {
      this.itemsAmt = 0; 
      // 程序不是用眼睛看，而是用代码读信息，故代码没告诉它res 是数组，它不会知道!!!!!!
      // 故用 res as any[], 将res 强制类型转换为数组
      // forEach()是数组的方法
      (res as any[]).forEach(x => this.itemsAmt += x.quantity);
    });


  }

  searchEvent(event: KeyboardEvent) {
    this.searchItem = (event.target as HTMLInputElement).value;
    // console.log(this.searchItem);
    this.apiService.search.next(this.searchItem);

  }

  setCategory(cat:string) {
    this.apiService.categoryBehaviorSubject.next(cat);
    console.log(cat);
  }
  


}
