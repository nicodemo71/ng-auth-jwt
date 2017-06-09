import { Component } from '@angular/core';
import {UserService} from './services/user.service';
import {UserModel} from './datamodels/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomUser: UserModel;
  constructor(private user: UserService) {

  }

  getUser() {
    // this.randomUser = this.user.getUser() ;
    // console.log(this.randomUser.name);

    this.user.getUser()
      .subscribe(
        res => {
          this.randomUser = res.json();
        },
        err => {
          console.error(err);
        }
      );
  }
}
