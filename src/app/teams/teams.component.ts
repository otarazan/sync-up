import { ApiService } from './../api.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  pageTitle:string = 'TEAMS';
  @Input() teamList=[];

  constructor(public apiService:ApiService) {
   }

  ngOnInit() {
    console.log(this.teamList);
  }

}
