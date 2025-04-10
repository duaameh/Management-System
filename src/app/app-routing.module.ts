import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthLayoutsComponent } from './feauter/sheard/components/auth-layouts/auth-layouts.component';

const routes: Routes = [
  {
    path:'users',
    component:AuthLayoutsComponent,
    loadChildren: () => import('./feauter/user/user.module').then(m => m.UserModule)
  },
  {
    path:'',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
