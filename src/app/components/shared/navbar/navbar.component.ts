import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  email: string | null = "";
  constructor(private authService:AuthService) {
    this.email = this.authService.email 
  }

  ngOnInit(): void {
  }

  // logout from auth service
  logout():void {
    this.authService.logoutService()
  }

}
