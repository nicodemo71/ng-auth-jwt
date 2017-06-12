import {Injectable} from '@angular/core';
import {UserModel} from '../datamodels/user.model';
import {AuthHttpService} from './auth-http.service';

@Injectable()
export class UserService {
  constructor(
    private user: UserModel,
    private authHttpService: AuthHttpService
    ) { }

  getUser() {
    return this.authHttpService.get('random-user');
  };
}
