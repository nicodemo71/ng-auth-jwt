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
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  onSubmit(form?: any): void {
    this.loginService.login({ username: this.username, password: this.password}).subscribe(
      data => {
        console.log(data);
        if (data.token) {
          // TODO: da qui faccio il routing
        }
      },
      err => alert(err.error)
    );
    // alert(this.username);
  }
}
