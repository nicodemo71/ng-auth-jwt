import {Component, OnInit} from '@angular/core';
import {UserService} from './services/user.service';
import {UserModel} from './datamodels/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  randomUser: UserModel;
  asyncTest: any; // = this.userService.getUser();
  constructor(private userService: UserService) {
  }
  ngOnInit () {
    // this.getUser();
  }
  getUser() {
    this.asyncTest = this.userService.getUser();
    /*
    this.userService.getUser()
      .subscribe(
        res => this.randomUser = res,
        err => console.error(err)
      );*/
  }
}
