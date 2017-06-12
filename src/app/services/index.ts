import {UserService} from './user.service';
import {LoginService} from './login.service';
import {AuthTokenService} from './auth-token.service';
import {AuthHttpService} from './auth-http.service';

export const SERVICES = [
  AuthTokenService,
  AuthHttpService,
  LoginService,
  UserService
];
