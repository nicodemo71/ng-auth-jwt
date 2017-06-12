import {Inject, Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {AuthTokenService} from './auth-token.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthHttpService {
  protected headers: Headers;
  constructor(
    private http: Http,
    private authTokenService: AuthTokenService,
    @Inject('apiUrl') private URL) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

 private createAuthorizationHeader(): Headers {
   const headerAuth = new Headers();
   Object.assign(headerAuth, this.headers);
   const token = this.authTokenService.getToken();
   if (token) {
     headerAuth.append('authorization', 'Bearer ' + token);
   }
   return headerAuth;
 }

 public post (endpoint, data: any) {
   const headers = this.createAuthorizationHeader();
   const body = JSON.stringify(data);
   return this.http.post(`${this.URL}/${endpoint}`, body, {headers: headers})
     .map((response: Response) => response.json())
     .catch(this.handleError);
 }

 public get (endpoint) {
   const headers = this.createAuthorizationHeader();
   return this.http.get(`${this.URL}/${endpoint}`, {headers: headers})
     .map((response: Response) => response.json())
     .catch(this.handleError);
 }

 private handleError(error: Response | any) {
   console.log(error);
   return Observable.throw(error.json());
 }
}
