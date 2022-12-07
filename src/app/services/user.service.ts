import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../intefraces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:Array<User> = new Array<User>();
  constructor(private _http:HttpClient) { }

  getUsers():any {
      return this._http.get<any>(environment.baseUrl + "/api/user/all")
  }
}
