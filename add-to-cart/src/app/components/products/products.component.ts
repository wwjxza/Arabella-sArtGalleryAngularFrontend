import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productList: any[] = [];
  searchKeywords: string = '';

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getProducts().subscribe( res => {
      this.productList = res;
    });

    this.api.search.subscribe( val => {
      this.searchKeywords = val;
    });

  }

}
