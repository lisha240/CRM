import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { UserdashboardComponent } from '../userdashboard/userdashboard.component';
import { ApiResponse2 } from '../service/api.response2';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  user: ApiResponse2;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers(this.user)
    .subscribe
    (
      data=>
      {
        this.user = data;
      }
    )
  }
}
