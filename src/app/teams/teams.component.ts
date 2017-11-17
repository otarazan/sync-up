import { ApiService } from './../api.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  pageTitle:string = 'TEAMS';
  @Input() teamList:any;

  userStory:any[] = [1,2,3,4,5,6,7,8];


  constructor(public apiService:ApiService) { }

  ngOnInit() {
    //this.teamList = this.apiService.getTeamsBySprintId();
  }

  

}
