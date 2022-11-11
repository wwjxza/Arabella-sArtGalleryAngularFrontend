import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.css']
})
export class SpaceComponent implements OnInit {

  public spaceList: any[] = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {

    this.api.getProducts().subscribe( res => {

      this.spaceList = res.filter((x: { category: string; }) => x.category === "Space");

      this.spaceList.forEach((a: any) => {
        Object.assign(a, {quantity: 1, total: a.price});
      });


    });

  }


}
