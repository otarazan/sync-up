import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  pageTitle:string = 'TEAMS';
  teamList:any[] = ["Avengers", "Bits&Bytes", "specTang", "friday", "luso"];

  userStory:any[] = [1,2,3,4,5,6,7,8];

  constructor() { }

  ngOnInit() {
  }

}
