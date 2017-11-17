import { Component,Output, OnInit, EventEmitter } from '@angular/core';
import { ApiService } from './../api.service';
import * as _ from 'lodash';



@Component({
  selector: 'sprints',
  templateUrl: './sprints.component.html',
  styleUrls: ['./sprints.component.css']
})
export class SprintsComponent implements OnInit {

  sprints:any;
  currentSprint:any;

  @Output() notify:EventEmitter<any>= new EventEmitter<any>();

  constructor(private _apiService: ApiService, ) { }

  ngOnInit() {
    this._apiService.getAllSprints().subscribe(sprints => {
      this.sprints = sprints; //_.sortBy(sprints, 'current').reverse();
      let defaultSprint = _.find(sprints,'current', true);
      this.getTeams(defaultSprint);
    });
  }

  getTeams(sprint){
    this.currentSprint = sprint;
    this.notify.emit(sprint);
  }
}
