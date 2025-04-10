import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutsComponent } from './components/auth-layouts/auth-layouts.component';
import { AuthHeaderComponent } from './components/auth-header/auth-header.component';
import { AuthFooterComponent } from './components/auth-footer/auth-footer.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HiddenPassPipe } from '../user/modules/pip/hidden-pass.pipe';



@NgModule({
  declarations: [
    AuthLayoutsComponent,
    AuthHeaderComponent,
    AuthFooterComponent,
    HiddenPassPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
    ],
  exports:[
    AuthLayoutsComponent,
    FormsModule ,// all modules will have formsmodules
    HiddenPassPipe,
    AuthLayoutsComponent,
    AuthHeaderComponent,
    AuthFooterComponent, 
  ]
})
export class SheardModule { }
