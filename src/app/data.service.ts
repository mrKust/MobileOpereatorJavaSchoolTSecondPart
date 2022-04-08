import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private DATA_URL = "ws://localhost:8080/BridgeBeetwenMobileOperatorJavaSchoolTParts/tariffsInfo";
  //private DATA_URL = 'http://localhost:8081/api/tariffsInfo';
  ws: WebSocket;

  constructor() {
    this.ws = new WebSocket(this.DATA_URL);
    console.log("Created web socket");
    this.ws.addEventListener('message', function (event) {
      console.log('Message from server ', event.data);
    });
  }

  /*getTariffs() : Observable<Tariff[]> {
    this.ws.onmessage = event => {
      console.log(JSON.parse(event.data));
      return JSON.parse(event.data);
    }
    return new Observable<Tariff[]>();
  }*/
  /*getTariffs(): Observable<Tariff[]> {
    return this.http.get<Tariff[]>(this.DATA_URL);
  }*/

}
