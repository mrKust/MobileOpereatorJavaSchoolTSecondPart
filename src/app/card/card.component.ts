import {Component, Input, OnInit} from '@angular/core';
/*import {Card} from "../app.component";*/
import {TariffsResponse} from "../tariff/tariffs-response.model";
import {DataService} from "../data.service";
import {Tariff} from "../tariff/tariff.model";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  /*@Input() card: Tariff*/


  response: Tariff[];

  constructor(private dataServ: DataService) { }

  ngOnInit(): void {
    this.dataServ.getTariffs().subscribe((dataFromService) => {
      console.log(dataFromService);
      this.response = dataFromService;
      console.log(this.response);
    })
  }

}
