import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: Observable<firebase.User>;
  username = 'mario';
  password = '1234';
  constructor(
    public auth: AngularFireAuth,
    public authmodule: AngularFireAuthModule,
    private loginService: LoginService,
    private router: Router) {
    this.user = auth.authState;
  }

  ngOnInit() {
  }

  onSubmit(form?: any): void {
    // this.authmodule.signInWithEmailAndPassword('aaa','nnn');
    this.auth.app.auth().signInWithEmailAndPassword(this.username, this.password).catch(
      error => {
        const errorCode: any = error;
        alert(errorCode.code);
      }
    );
    /*
    this.loginService.login({ username: this.username, password: this.password}).subscribe(
      data => {
        console.log(data);
        if (data.token) {
          // TODO: da qui faccio il routing.
          this.router.navigateByUrl('home');
        }
      },
      err => alert(err.error)
    );
    */
    // alert(this.username);.
  }
}
