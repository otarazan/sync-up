import { Component } from '@angular/core';
import {ApiService} from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  s: string = "Hello2";
  teams:any;

  constructor(private apiService:ApiService) {}

  onSprintClicked(sprint:any){
    this.teams = this.apiService.getTeamsBySprintId(sprint.id).subscribe(sprintDetail=>{
      console.log(sprintDetail);
      this.teams = sprintDetail;
    });
  }

}
