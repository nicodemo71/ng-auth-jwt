import {Inject, Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class LoginService {
  protected headers: Headers;
  constructor(
    private http: Http,
    @Inject('apiUrl') private URL) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }
  login(user: any) {
    const body = JSON.stringify(user);
    return this.http.post(`${this.URL}/login`, body, {headers: this.headers})
    // note: utilizzando la funzione map, modifico l'observable Response in un oggetto
    // in questo modo non devo ritraspettere un oggetto Response ma il risultato.
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }
  handleError(error: Response | any) {/*
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);*/
    console.log(error);
    return Observable.throw(error.json());
  }
}
