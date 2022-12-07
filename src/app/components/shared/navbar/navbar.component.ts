import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/intefraces/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  email: string | null = "";
  user: User = new User();
  constructor(private authService:AuthService) {
    this.email = this.authService.email 
  }

  ngOnInit(): void {
    this.getCurrentUser()
  }

  getCurrentUser(){
      this.authService.getCurrentUser().subscribe((user:User) => {
        this.user = user;
      })
  }

  // logout from auth service
  logout():void {
    this.authService.logoutService()
  }

}
