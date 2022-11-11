import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css']
})
export class OthersComponent implements OnInit {

  public othersList: any[] = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {

    this.api.getProducts().subscribe( res => {

      this.othersList = res.filter((x: { category: string; }) => x.category === "Others");

      this.othersList.forEach((a: any) => {
        Object.assign(a, {quantity: 1, total: a.price});
      });


    });

  }


}
