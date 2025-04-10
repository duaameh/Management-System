import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormsComponent } from './components/user-forms/user-forms.component';
import { UserDetialsComponent } from './components/user-detials/user-detials.component';
import { SheardModule } from '../sheard/sheard.module';
import { HiddenPassPipe } from './modules/pip/hidden-pass.pipe';


@NgModule({
  declarations: [
  
    UserListComponent,
       UserFormsComponent,
       UserDetialsComponent
        
  ],
  imports: [
    CommonModule,
    UserRoutingModule ,
    SheardModule
  ]
})
export class UserModule { }
