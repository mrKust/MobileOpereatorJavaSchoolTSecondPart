import {Component, Input, OnInit} from '@angular/core';
import {Card} from "../app.component";
import {Tariff} from "../tariff/tariff.model";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  @Input() card: Tariff


  ngOnInit(): void {}

}
