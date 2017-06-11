import {Injectable, Inject} from '@angular/core';
import {Http, Response} from '@angular/http';
import {UserModel} from '../datamodels/user.model';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {
  constructor(
    private http: Http,
    private user: UserModel,
    @Inject('apiUrl') private URL) { }

  getUser() {
    return this.http.get(`${this.URL}/random-user`)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  };

  handleError(err: any) {
    return Observable.throw(err.json());
  }
}
