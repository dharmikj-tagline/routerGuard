import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { HelpUsComponent } from './components/help-us/help-us.component';


@NgModule({
  declarations: [
    LoginComponent,
    ContactComponent,
    AboutComponent,
    HelpUsComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    LoginComponent
  ]
})
export class AuthModule { }
