import {Component, OnInit} from '@angular/core';
import {UserService} from './services/user.service';
import {UserModel} from './datamodels/user.model';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  randomUser: UserModel;
  asyncTest: any; // = this.userService.getUser();
  items: FirebaseListObservable<any[]>;
  constructor(private userService: UserService, db: AngularFireDatabase ) {
    try {
      this.items = db.list('/items');
      this.items.subscribe(
        success => console.log('got data'),
        error => console.log(error.code)
      );
    } catch (e) {
      // debugger
    }
    // debugger;
  }
  ngOnInit () {
    // this.getUser();.
    // this.items.push({name: 'prova prova'});
  }
  // note: per far funzionare il PIPE async sull'html, commentare dopo .getUser()
  getUser() {
    this.asyncTest = this.userService.getUser().subscribe(
      res => this.randomUser = res,
      err => {
        console.error(err.error);
        this.randomUser = null;
      }
    );
  }
}
