import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ConceptComponent } from './components/references/concept/concept.component';
import { TransversaleComponent } from './components/references/transversale/transversale.component';
import { WebComponent } from './components/references/web/web.component';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "web",
    component: WebComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "concept",
    component: ConceptComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "transversale",
    component: TransversaleComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
