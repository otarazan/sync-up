import { Component } from '@angular/core';
import {ApiService} from './api.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  s: string = "Hello2";
  teams:any;
  self = this;

  constructor(private apiService:ApiService) {}

  onSprintClicked(sprint:any){
    this.teams = this.apiService.getTeamsBySprintId(sprint.id).subscribe((sprintDetail:any)=>{
      _.forEach(sprintDetail, team => {
          _.forEach(team.cards, us => {
              this.apiService.getGCRsByUSId(us.id).subscribe(gcrs=>{ 
                us.gcrs = gcrs;
                console.log(us);
              });
              this.apiService.getChartDataByUsId(us.id).subscribe(chartData=>{
                us.chartData = chartData;
                console.log(chartData);
              });
          });
      });
      this.teams = sprintDetail;
    });
  }

}
