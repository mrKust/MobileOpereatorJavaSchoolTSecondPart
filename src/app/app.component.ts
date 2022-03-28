import { Component } from '@angular/core';

export interface Card {
  tariffName: string
  tariffPrice: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-MobileOperatorJavaSchoolTPartTwo';

  cards: Card[] = [
    {tariffName: 'Tariff 1', tariffPrice: '$10'},
    {tariffName: 'Tariff 2', tariffPrice: '$20'},
    {tariffName: 'Tariff 3', tariffPrice: '$30'}
  ]
}
