import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
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
