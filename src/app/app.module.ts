import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SkillsComponent } from './skills/skills.component';
import { WebComptenceComponent } from './web-comptence/web-comptence.component';
import { ConceptComptenceComponent } from './concept-comptence/concept-comptence.component';
import { TransverComptenceComponent } from './transver-comptence/transver-comptence.component';
import { LoginComponent } from './login/login.component';
import { WebReferencesComponent } from './web-references/web-references.component';
import { ConceptReferencesComponent } from './concept-references/concept-references.component';
import { TransversaleReferencesComponent } from './transversale-references/transversale-references.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SkillsComponent,
    WebComptenceComponent,
    ConceptComptenceComponent,
    TransverComptenceComponent,
    LoginComponent,
    WebReferencesComponent,
    ConceptReferencesComponent,
    TransversaleReferencesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
