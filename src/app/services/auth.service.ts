import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  _authenticated: boolean = false;
  email: string | null = "";
  constructor(private _http:HttpClient, private router:Router) {
    this._authenticated = localStorage.getItem("connected") == "true" ? true : false;
    this.email = localStorage.getItem("email") != null ? localStorage.getItem("email")  : "";
   }

   setToken(email:string) {
       localStorage.setItem("connected","true");
       localStorage.setItem("email", email);
   }
 
   getToken() {
     if(!localStorage.getItem("email") ) return null;
       return localStorage.getItem("email");
   }

  loginService(email:string, password:string):any {
      this._http.post<any>(environment.baseUrl + "/api/user/login",{"email": email,"password": password}).subscribe((response: any) => {
        if(response.status == 200) {
          this.setToken(email)
          this._authenticated = localStorage.getItem("connected") == "true" ? true : false;
          this.router.navigate(["/"])
          window.location.reload();
          return true
        }
        return false;
      }) 
  }

  logoutService():void {
      localStorage.removeItem("connected")
      localStorage.removeItem("email")
      this.router.navigate(["/login"])
  }

  getCurrentUser():any{
   return this._http.get<any>(environment.baseUrl + `/api/user/detaills?email=${this.email}`)
  }

}
