import { Component, OnInit } from '@angular/core';
import User from '../../modules/use.modules';
import { getUsers } from '../../DB/user';
import Swal from 'sweetalert2';
export {getUsers} from '../../DB/user'
@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{

  deleted(user: User, index: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: `You are about to delete ${user.name}. This action cannot be undone!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.users.splice(index, 1);
  
        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: `${user.name} has been deleted.`,
          confirmButtonColor: '#3085d6',
        });
      }
    });
  }
  
edit(user:User) {
throw new Error('Method not implemented.');
}
   users :User []=[];
  ngOnInit(): void {
  //get data from promisse
  getUsers().then ((users : User []) => {
    this.users = users;
  })
  }

}
