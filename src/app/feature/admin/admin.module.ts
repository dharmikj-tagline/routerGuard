import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ShowUserComponent } from './show-user/show-user.component';
import { UserOnlineComponent } from './user-online/user-online.component';
import { UserTotalComponent } from './user-total/user-total.component';


@NgModule({
  declarations: [
    ShowUserComponent,
    UserOnlineComponent,
    UserTotalComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports:[
    ShowUserComponent
  ]
})
export class AdminModule { }
