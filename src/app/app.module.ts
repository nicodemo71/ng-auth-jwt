import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSemanticModule } from 'ng-semantic';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//
import { AppComponent } from './app.component';
import { SERVICES } from './services/index';
import { UserModel } from './datamodels/user.model';
import { LoginComponent } from './views/login/login.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './views/home/home.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
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
