import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent implements OnInit {

  public plantsList: any[] = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {

    this.api.getProducts().subscribe( res => {

      this.plantsList = res.filter((x: { category: string; }) => x.category === "Plants");

      this.plantsList.forEach((a: any) => {
        Object.assign(a, {quantity: 1, total: a.price});
      });


    });

  }

}
