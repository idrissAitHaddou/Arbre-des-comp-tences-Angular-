import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/intefraces/skill';
import { Image, User } from 'src/app/intefraces/user';
import { SkillsService } from 'src/app/services/skills.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent implements OnInit {
    users:Array<User> = new Array<User>();
    skills:any[] = [];
    _skills:any[] = [];
    images:any[] = [];
    counter:number = 0;
    emailCurrent:string = ""
    constructor(private skillService:SkillsService, private userService:UserService) {}

    ngOnInit() {
      this.getUsers()
      this.getWebSkills()                                   
    }

    getUsers() {
       this.userService.getUsers().subscribe((users:Array<User>) => { this.users = users; });
    }
        
    getWebSkills(){
        this.skillService.getWebSkills(1).subscribe((skills: any) => {
          let index = 0
          for(let skill of skills) {
            this._skills.push(skill);
            if(this.counter == 7){
              this.counter = 0;
              this.skills[index] = this._skills
              this._skills = [];
              index++
            }else {
              this.counter++
            }
          }
        })
    }

    chnageStatusSkills(idSkill:number, status:string, level:string) {
      console.log(idSkill, status, level)
      this.skillService.chnageStatusSkills(idSkill, status, level).subscribe((response:any) =>{ this.getWebSkills() })
    }

    getImage(index:number, email:string):any {
      this.users.forEach((user:any) => {
         if(user.email == email) {
              this.images[index]=[user.email, user.image]
         }
      })
    }

}
