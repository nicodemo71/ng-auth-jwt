import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {AuthTokenService} from './auth-token.service';


@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(
    private router: Router,
    private authTokenService: AuthTokenService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isAuth = Boolean(this.authTokenService.getToken());
    // Redirect to login if it's not auth.
    if (!isAuth) {
      this.router.navigateByUrl('login');
    }
    // If isAuth = true, active the view
    return isAuth;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

}
