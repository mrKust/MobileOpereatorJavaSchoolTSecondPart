/*import { Injectable } from "@angular/core";
import { Observable, Observer } from 'rxjs';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import {Tariff} from "./tariff/tariff.model";

const CHAT_URL = "ws://http://localhost:8080/tariffsInfo";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private subject: AnonymousSubject<MessageEvent>;
  public messages: Subject<Tariff[]>;

  constructor() {
    this.messages = <Subject<Tariff[]>>this.connect(CHAT_URL).pipe(
      map(
        (response: MessageEvent): Tariff[] => {
          console.log(response.data);
          let data = JSON.parse(response.data)
          return data;
        }
      )
    );
  }

  // @ts-ignore
  public connect(url): AnonymousSubject<MessageEvent> {
    if (!this.subject) {
      this.subject = this.create(url);
      console.log("Successfully connected: " + url);
    }
    return this.subject;
  }

  private create(url: string | URL): AnonymousSubject<MessageEvent> {
    let ws = new WebSocket(url);
    let observable = new Observable((obs: Observer<MessageEvent>) => {
      ws.onmessage = obs.next.bind(obs);
      ws.onerror = obs.error.bind(obs);
      ws.onclose = obs.complete.bind(obs);
      return ws.close.bind(ws);
    });
    let observer = {
      error: null,
      complete: null,
      next: (data: Object) => {
        console.log('Message sent to websocket: ', data);
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify(data));
        }
      }
    };
    // @ts-ignore
    return new AnonymousSubject<MessageEvent>(observer, observable);
  }

  getTariffs(): Observable<Tariff[]> {
    return this.messages;
  }
}*/




import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, share, Subject} from 'rxjs';
import {Tariff} from "./tariff/tariff.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private DATA_URL = "ws://localhost:8080/BridgeBeetwenMobileOperatorJavaSchoolTParts/tariffsInfo";
  //private DATA_URL = 'http://localhost:8081/api/tariffsInfo';
  ws: WebSocket;

  constructor(private http: HttpClient) {
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
