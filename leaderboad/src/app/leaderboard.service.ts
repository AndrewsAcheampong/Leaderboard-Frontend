import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Leaderboard} from "./leaderboard";

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  constructor(private http: HttpClient) { }
  url:string = "http://localhost:8080/v1/leaderboard";
  getLeaderBoard(){
    return this.http.get<Leaderboard[]>(this.url)
  }
}
