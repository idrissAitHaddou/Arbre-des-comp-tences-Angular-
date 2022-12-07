import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private _http:HttpClient) { }

  getWebSkills(idReference:number):any{
    return this._http.get<any>(environment.baseUrl + `/api/skill/all?idReference=${idReference}`)
  }

  chnageStatusSkills(idSkill:number, status:string, level:string):any {
    let reversStatus = !(status == "true")
    let lastStatus =   reversStatus.toString()
   return this._http.get<any>(environment.baseUrl + `/api/skill/validate?idSkill=${idSkill}&status=${lastStatus}&level=${level}`)
  }

}
