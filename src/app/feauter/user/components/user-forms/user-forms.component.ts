import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import User from '../../modules/use.modules';
import { AddUsers, GetUser, UpdateUser } from '../../DB/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-forms',
  standalone: false,
  templateUrl: './user-forms.component.html',
  styleUrl: './user-forms.component.css'
})
export class UserFormsComponent implements OnInit {
  id: string | null = null;
  loading: boolean = false;
  error: string[] = [];
  name: string = '';
  password: string = '';
  email: any;
  success: string = '';
  edit: boolean = false;
  create_at: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.edit = true;
      Swal.fire({
        title: 'Fetching user data...',
        text: 'Please wait',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        }
      });

      GetUser(this.id)
        .then((user: User) => {
          this.edit = false;
          this.email = user.email;
          this.name = user.name;
          this.password = user.password;
          this.create_at = user.updated_at;
          Swal.close();
        })
        .catch(() => {
          this.error.push('Error retrieving user data');
          Swal.close();
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Failed to retrieve user data!',
          });
        });
    }
  }

  saveBtnClick() {
    this.loading = true;
    this.error = [];

    // التحقق من البيانات قبل عرض رسالة التحميل
    if (
       !this.email.trim()  || !this.name.trim()  || !this.password.trim()) {
      this.loading = false;
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Please fill in all required fields.',
      });
      return;
    }

    Swal.fire({
      title: 'Processing...',
      text: 'Please wait',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    const user: User = {
      name: this.name,
      email: this.email,
      password: this.password,
    };

    if (this.id) { //edit page
      user.id = this.id;
      UpdateUser(user)
        .then(() => {
          this.loading = false;
          this.success = 'User is updated';

          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'User has been updated successfully!',
            confirmButtonColor: '#3085d6',
          });
        })
        .catch(() => {
          this.loading = false;
          this.error.push('Update failed');

          Swal.fire({
            icon: 'error',
            title: 'Update Failed',
            text: 'There was an error updating the user!',
            confirmButtonColor: '#d33',
          });
        });
    } 
    else {
      AddUsers(user)
        .then(() => {
          this.loading = false;
          this.success = 'User is added';

          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'User has been added successfully!',
            confirmButtonColor: '#3085d6',
          });
        })
        .catch(() => {
          this.loading = false;
          this.error.push('Failed to add user');

          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Failed to add the user!',
            confirmButtonColor: '#d33',
          });
        });
    }
  }
}