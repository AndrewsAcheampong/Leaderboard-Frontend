import { Component, ViewEncapsulation,OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Leaderboard, LeaderboardInterface} from "../leaderboard";
import {LeaderboardService} from "../leaderboard.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css'],

})

export class LeaderboardComponent implements OnInit{
  username:string | null = "";
  ELEMENT_DATA: Leaderboard[] = [];

  displayedColumns: string[] = ['username', 'name', 'clan','honour','overall_rank','Action'];
  dataSource = new MatTableDataSource<Leaderboard>(this.ELEMENT_DATA);

  constructor(private modalService: NgbModal,public lbs:LeaderboardService,private router:Router,private route:ActivatedRoute) {

  }
  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username');
    this.lbs.getLeaderBoard().subscribe((response) => {
      this.dataSource.data = response as LeaderboardInterface[];
      console.log(response)
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
