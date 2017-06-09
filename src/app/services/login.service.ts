import {Inject, Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(
    private http: Http,
    @Inject('apiUrl') private URL) { }

  login(u: string, p: string): Observable<Response> {
    return this.http.post(`${this.URL}/login`, JSON.stringify({
      username: u,
      password: p,
    }), {headers: this.headers});
  }
}
