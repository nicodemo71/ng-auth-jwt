import {Component, OnInit} from '@angular/core';
import {UserService} from './services/user.service';
import {UserModel} from './datamodels/user.model';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  randomUser: UserModel;
  asyncTest: any; // = this.userService.getUser();
  // items2: FirebaseListObservable<any[]>;
  items2: Subscription;
  items: any[];
  constructor(private userService: UserService, private db: AngularFireDatabase ) {
    this.items2 = db.list('/items').subscribe(
      data => this.items = data,
      error => console.log(error.code)
    );
  }
  ngOnInit () {
    // this.getUser();.
    // this.items2.push({name: 'prova prova'});
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
