import {Component, Input, OnInit} from '@angular/core';
/*import {Card} from "../app.component";*/
import {TariffsResponse} from "../tariff/tariffs-response.model";
import {DataService} from "../data.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  /*@Input() card: Tariff*/


  response: TariffsResponse = {data: []};

  constructor(private dataServ: DataService) { }

  ngOnInit(): void {
    this.dataServ.getTariffs().subscribe((dataFromService) => {
      this.response = dataFromService;
    })
  }

}
