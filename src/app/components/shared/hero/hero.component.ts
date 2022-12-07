import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/intefraces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  currentUser: User = new User();
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getUserLogin()
  }

  getUserLogin():void {
        this.authService.getCurrentUser().subscribe( (user:User) => {
        this.currentUser = user
      })
  }

}
