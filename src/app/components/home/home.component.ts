import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/intefraces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users:Array<User> = new Array<User>();
  constructor(private userService: UserService) { 
  }

  ngOnInit(): any {
    this.getAllUsers();
  }
  // get all cards
  getAllUsers() {
      this.userService.getUsers().subscribe((users: Array<User>) => {
            this.users = users;
      })
  }

}
