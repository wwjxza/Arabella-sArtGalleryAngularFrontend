import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {
  public animalsList: any[] = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {

    this.api.getProducts().subscribe( res => {

      this.animalsList = res.filter((x: { category: string; }) => x.category === "Animals");

      this.animalsList.forEach((a: any) => {
        Object.assign(a, {quantity: 1, total: a.price});
      });


    });

  }


}
