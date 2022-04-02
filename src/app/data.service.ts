import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TariffsResponse } from 'src/app/tariff/tariffs-response.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private DATA_URL = 'http://localhost:8080/api/tariffsInfo';
  //private DATA_URL = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) { }

  getTariffs(): Observable<TariffsResponse> {
    return this.http.get<TariffsResponse>(this.DATA_URL);
  }
}
