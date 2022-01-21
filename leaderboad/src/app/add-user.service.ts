import { User } from './user';

import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AddUserService {

  constructor(private http:HttpClient) { }

  /**
   * registerUser
   */
  public registerUser(user:any) {
    return this.http.post("http://localhost:5050/v1/leaderboard/add" , user)
  }
}
