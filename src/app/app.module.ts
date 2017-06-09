import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSemanticModule } from 'ng-semantic';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {SERVICES} from './services/index';
import {UserModel} from './datamodels/user.model';
import { LoginComponent } from './login/login.component';
import {AppRoutingModule} from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    NgSemanticModule
  ],
  providers: [
    ...SERVICES,
    UserModel,
    {
      provide: 'apiUrl',
      useValue: 'http://localhost:3000'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
