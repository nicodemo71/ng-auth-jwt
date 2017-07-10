import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-login-firebase',
  template: `
    <button (click)="login()">Login</button>
    <button (click)="logout()">Logout</button>    
  `
})
export class LoginFirebaseComponent implements OnInit {
  user: Observable<firebase.User>;
  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }
  ngOnInit() {
    this.afAuth.app.auth().onAuthStateChanged((user) => {
      if (user) {
        // console.log(JSON.stringify(user));
      } else {
        console.log('no user on login');
      }
    }, cause => console.error(JSON.stringify(cause)));
  }

  login() {
    // TODO
    if (this.afAuth.app.auth().currentUser) {
      // TODO start sign-in
      console.log(JSON.stringify(this.afAuth.app.auth().currentUser));
    } else {
      const email = 'nlopiccolo@hotmail.com';
      const password = 'hagabadi71';
      this.afAuth.auth.signInWithEmailAndPassword(email, password).then( result => {
        console.log(JSON.stringify(result));
      }, (cause: any) => {
        const error: firebase.auth.Error = cause;
        alert(error.message);
      });
    }
  }

  logout() {
    // TODO
    this.afAuth.auth.signOut();
  }
}
