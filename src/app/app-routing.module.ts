import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AuthGuard} from './auth.guard';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { TeamComponent } from './team/team.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admindashboard', component: AdmindashboardComponent , canActivate:[AuthGuard] },
  { path: 'userdashboard', component: UserdashboardComponent , canActivate:[AuthGuard] },
  { path: 'team', component: TeamComponent , canActivate:[AuthGuard] },
  {path: '***', pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
