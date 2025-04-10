import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetialsComponent } from './components/user-detials/user-detials.component';
import { UserFormsComponent } from './components/user-forms/user-forms.component';

const routes: Routes = 
      [
        {
          path:'',
          pathMatch:'full',
          redirectTo:'list'
        },
        {
          path:'list',
          component:UserListComponent
        },
        {
          path:'add',
          component:UserFormsComponent
        },
        {
          path:'edit/:id',
          component:UserFormsComponent
        },
        {
          path:'details/:id',
          component:UserDetialsComponent
        }
      ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
