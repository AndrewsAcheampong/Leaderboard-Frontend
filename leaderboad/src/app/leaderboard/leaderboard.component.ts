import { Component, ViewEncapsulation,OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Leaderboard, LeaderboardInterface} from "../leaderboard";
import {LeaderboardService} from "../leaderboard.service";

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css'],

})

export class LeaderboardComponent implements OnInit{
  ELEMENT_DATA: Leaderboard[] = [];

  displayedColumns: string[] = ['username', 'name', 'clan','honour','overall_rank','Action'];
  dataSource = new MatTableDataSource<Leaderboard>(this.ELEMENT_DATA);
  userData: Leaderboard = {clan: "", honour: 0, languages: [], name: "", overall_rank: 0, username: ""};
  constructor(private modalService: NgbModal,public lbs:LeaderboardService) {

  }
  ngOnInit(): void {
    this.lbs.getLeaderBoard().subscribe((response) => {
      this.dataSource.data = response as LeaderboardInterface[];
      console.log(response)
    })

  }

  callAll(content: any, payload: any) {
    this.openViewMoreModal(content);
    this.getUserData(payload);
  }
  getUserData(payload : any) {
    this.lbs.getLeaderboardUser(payload).subscribe((response) => {
      this.userData = response as LeaderboardInterface;
      console.log(this.userData)
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }

  openViewMoreModal(content: any) {
    this.modalService.open(content, { centered: true });
  }

}
