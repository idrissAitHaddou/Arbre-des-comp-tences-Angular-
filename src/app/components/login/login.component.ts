import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string = "";
  password:string = "";
  checkLogin:boolean = false;
  error:string = "";
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("email") != null) this.router.navigate(["/"])
  }

  // login user by email and password
  loginUser():any { 
      this.checkLogin = true
      this.authService.loginService(this.email,this.password) == false ? this.error = "your password or email invalid" : this.error = ""
      this.checkLogin = false
  }

}
