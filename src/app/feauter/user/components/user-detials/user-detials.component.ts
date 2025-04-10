import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetUser } from '../../DB/user';
import User from '../../modules/use.modules';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-detials',
  standalone: false,
  templateUrl: './user-detials.component.html',
  styleUrl: './user-detials.component.css'
})
export class UserDetialsComponent implements OnInit {
  id: string | null = '';
  loading: boolean = true;
  error: string[] = [];
  user!: User;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.loading = true; // processing data
      Swal.fire({
        title: 'Fetching user data...',
        text: 'Please wait',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        }
      });

      GetUser(this.id)
        .then((users: User) => {
          this.loading = false;
          this.user = users;

          // Close the SweetAlert loading spinner
          Swal.close();
        })
        .catch((error: string) => {
          this.error.push(error);

          // Show error alert with SweetAlert2 and close the loading spinner
          Swal.close();
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Failed to fetch user details!',
            confirmButtonColor: '#d33',
          });

          this.loading = false;
        });
    } else {
      this.error.push('User not found');

      // Close the SweetAlert loading spinner and show error alert
      Swal.close();
      Swal.fire({
        icon: 'error',
        title: 'User Not Found',
        text: 'No user ID provided!',
        confirmButtonColor: '#d33',
      });
    }
  }
}
