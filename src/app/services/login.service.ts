import {Injectable} from '@angular/core';
import {AuthHttpService} from './auth-http.service';
import {AuthTokenService} from './auth-token.service';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
  constructor(
    private authHttpService: AuthHttpService,
    private authToken: AuthTokenService) { }

  login(user: any) {
    return this.authHttpService.post('login', user)
      .map(
        data => {
          this.authToken.setToken(data.token);
          return data;
        }
      );
  }
}
