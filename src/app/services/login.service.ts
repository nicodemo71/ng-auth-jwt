import {Inject, Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginService {
  constructor(
    private http: Http,
    @Inject('apiUrl') private URL) { }
  login(user: any) {
    const body = JSON.stringify(user);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.URL}/login`, body, {headers: headers})
    // note: utilizzando la funzione map, modifico l'observable Response in un oggetto
    // in questo modo non devo ritraspettere un oggetto Response ma il risultato.
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }
  handleError(error: any) {
    // console.log(error);
    // note: dovrebbe concludersi con error.json() perchè un response ma va in errore.
    return Observable.throw(error);
  }
}
