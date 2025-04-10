import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { Router } from '@angular/router';
import { loginUser } from '../../feauter/user/DB/user';
import User from '../../feauter/user/modules/use.modules';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private route :Router){

  }
  password: string ='';
email:string ='' ;
error :string ='';
success :boolean=false;
userLogin() {
  this.error = '';
  
  if (this.email.trim() && this.password.trim()) {
    // إظهار تحميل أثناء عملية تسجيل الدخول
    Swal.fire({
      title: 'Logging in...',
      text: 'Please wait',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    loginUser(this.email, this.password)
      .then((user: User) => {
        Swal.fire({
          icon: 'success',
          title: 'You have successfully logged in',
          text: `Hello ${user.name}!`,
          confirmButtonColor: '#3085d6',
        });

        this.success = true;
        this.route.navigate(['users']); 
      })
      .catch((error: string) => {
        Swal.fire({
          icon: 'error',
          title: 'login failed',
          text: error,
          confirmButtonColor: '#d33',
        });

        this.success = false;
        this.error = error;
      });
  }
}

}
