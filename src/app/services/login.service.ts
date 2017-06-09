import {Inject, Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class LoginService {
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(
    private http: Http,
    @Inject('apiUrl') private URL) { }

  login(u: string, p: string) {
    this.http.post(`${this.URL}/login`, JSON.stringify({
      username: u,
      password: p
    }), { headers: this.headers}).subscribe(
      res => {
        // res.json();
        console.log(res);
      },
      err => {
        console.error(err);
      }
    );
  }
}
