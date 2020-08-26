import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { HomeComponent} from './home/home.component';
import { LoginComponent} from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AuthGuard} from './auth.guard';
import { LoginAuthService} from './login-auth.service';
import { from } from 'rxjs';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { TeamComponent } from './team/team.component';

const appRoutes: Routes = []

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    UserdashboardComponent,
    HomeComponent,
    LoginComponent,
    AdmindashboardComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthGuard,
    LoginAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
