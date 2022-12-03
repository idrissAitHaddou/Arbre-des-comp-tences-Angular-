import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConceptReferencesComponent } from './concept-references/concept-references.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SkillsComponent } from './skills/skills.component';
import { TransversaleReferencesComponent } from './transversale-references/transversale-references.component';
import { WebReferencesComponent } from './web-references/web-references.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "skills",
    component: SkillsComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "referencecs/web",
    component: WebReferencesComponent
  },
  {
    path: "referencecs/concept",
    component: ConceptReferencesComponent
  },
  {
    path: "referencecs/transversale",
    component: TransversaleReferencesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
