import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'mario';
  password = '1234';
  constructor(public loginService: LoginService) { }

  ngOnInit() {
  }

  onSubmit(form?: any): void {
    this.loginService.login(this.username, this.password).subscribe(
      res => {
        console.log(JSON.stringify(res));
      }, err => {
        console.error(JSON.stringify(err));
      }
    );
    // alert(this.username);
  }
}
