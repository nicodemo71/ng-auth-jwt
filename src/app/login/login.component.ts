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
    this.loginService.login({ username: this.username, password: this.password}).subscribe(
      // note: nel service ho usato l'observable map restituendo un oggetto variabile (any)
      data => console.log(data),
      err => alert(err.error)
    );
    // alert(this.username);
  }
}
