import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TariffsResponse } from 'src/app/tariff/tariffs-response.model';
import {Tariff} from "./tariff/tariff.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private DATA_URL = 'http://localhost:8081/api/tariffsInfo';

  constructor(private http: HttpClient) { }

  getTariffs(): Observable<Tariff[]> {
    return this.http.get<Tariff[]>(this.DATA_URL);
  }
}
