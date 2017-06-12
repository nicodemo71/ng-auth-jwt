import {Injectable} from '@angular/core';

@Injectable()
export class AuthTokenService {
  protected store: Storage;
  key = 'auth-token';
  constructor() {
    this.store = window.localStorage;
  }
  public getToken(): any {
    console.log(this.key);
    return this.store.getItem(this.key);
  }
  public setToken(token): void {
    if (token) {
      this.store.setItem(this.key, token);
    } else {
      this.store.removeItem(this.key);
    }
  }
}
