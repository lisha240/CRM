import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { ApiResponse2 } from './api.response2';
import {ApiResponse} from "../service/api.response";
import { environment } from 'src/environments/environment';

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private http: HttpClient) {
       this.http = http;
}

  saveUser(user:any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>("http://localhost:8086/registration", user, httpOptions);
  }
  
  loginUser(user:any): Observable<ApiResponse2>{
   return  this.http.post<ApiResponse2>("http://localhost:8086/login", user , httpOptions);
}

getAllUsers(token:any): Observable<ApiResponse2>{
return  this.http.get<ApiResponse2>("http://localhost:8086/users", httpOptions);
}

getUser(token:any): Observable<any>{
  return this.http.get<ApiResponse2>("http://localhost:8086/getuser", httpOptions);
}


saveTeam(team:any): Observable<ApiResponse> {
  return this.http.post<ApiResponse>("http://localhost:8086/addteam", team, httpOptions);
}



}
