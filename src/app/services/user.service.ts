import {Injectable, Inject} from '@angular/core';
import {Http, Response} from '@angular/http';
import {UserModel} from '../datamodels/user.model';
/*import 'rxjs/Rx';*/
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  constructor(
    private http: Http,
    private user: UserModel,
    @Inject('apiUrl') private URL) { }

  getUser(): Observable<Response> {
    return this.http.get(`${this.URL}/random-user`);
  };
}
