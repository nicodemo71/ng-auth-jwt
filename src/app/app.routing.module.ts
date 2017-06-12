import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import {LoginComponent} from './views/login/login.component';
import {HomeComponent} from './views/home/home.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      { path: '', component: LoginComponent},
      { path: '**', component: LoginComponent}
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [],
})

export class AppRoutingModule {}
