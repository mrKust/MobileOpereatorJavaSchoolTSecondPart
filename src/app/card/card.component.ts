import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {Tariff} from "../tariff/tariff.model";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{


  response: Tariff[];

  constructor(private dataServ: DataService) { }

  ngOnInit(): void {
    console.log('card.component started here');
    this.dataServ.ws.onmessage = ev => {
      this.response = JSON.parse(ev.data);
    }
    console.log('card.component ended here');
  }

}
