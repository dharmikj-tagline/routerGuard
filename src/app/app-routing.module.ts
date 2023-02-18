import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './feature/auth/components/about/about.component';
import { ContactComponent } from './feature/auth/components/contact/contact.component';
import { HelpUsComponent } from './feature/auth/components/help-us/help-us.component';
import { TestGuard } from './feature/auth/guard/test.guard';
import { HomeComponent } from './feature/components/home/home.component';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=>import('./feature/auth/auth.module').then(x => x.AuthModule)
  },
  {
    path:'home',
    component:HomeComponent,
    canActivate: [TestGuard],
    canDeactivate : [TestGuard],
  },
  {
    path:'help',
    component:HelpUsComponent,
    canActivateChild : [TestGuard],
    children:[
      {
        path:'contact',
        canDeactivate : [TestGuard],
        component:ContactComponent
      },
      {
        path:'about',
        component:AboutComponent
      }
    ],
  },
  {
    path:'showUser',
    loadChildren:()=>import('./feature/admin/admin.module').then(x => x.AdminModule),
    canLoad : [TestGuard]
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
