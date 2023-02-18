import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestGuard } from '../auth/guard/test.guard';
import { ShowUserComponent } from './show-user/show-user.component';
import { UserOnlineComponent } from './user-online/user-online.component';
import { UserTotalComponent } from './user-total/user-total.component';

const routes: Routes = [
  {
    path:'',
    component:ShowUserComponent,
    canActivateChild : [TestGuard],
    children:[
      {
        path:'total',
        component:UserTotalComponent
      },
      {
        path:'online',
        component:UserOnlineComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
