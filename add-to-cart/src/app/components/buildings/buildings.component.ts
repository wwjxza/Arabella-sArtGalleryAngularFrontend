import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css']
})
export class BuildingsComponent implements OnInit {

  public buildingsList: any[] = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {

    this.api.getProducts().subscribe( res => {

      this.buildingsList = res.filter((x: { category: string; }) => x.category === "Buildings");

      this.buildingsList.forEach((a: any) => {
        Object.assign(a, {quantity: 1, total: a.price});
      });


    });

  }


}
