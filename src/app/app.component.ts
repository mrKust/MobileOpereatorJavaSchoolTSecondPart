import {Component, OnInit} from '@angular/core';
import {TariffsResponse} from "./tariff/tariffs-response.model";
import {DataService} from "./data.service";

export interface Card {
  tariffName: string
  tariffPrice: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ng-MobileOperatorJavaSchoolTPartTwo';
  response: TariffsResponse = {data: []};

  constructor(private dataServ: DataService) {
  }

  ngOnInit(): void {
    this.dataServ.getTariffs().subscribe((dataFromService) =>{
      this.response = dataFromService;
    })
  }

  /*cards: Card[] = [
    {tariffName: 'Tariff 1', tariffPrice: '$10'},
    {tariffName: 'Tariff 2', tariffPrice: '$20'},
    {tariffName: 'Tariff 3', tariffPrice: '$30'}
  ]*/
}
