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

  @Output() notify:EventEmitter<any>= new EventEmitter<any>();

  constructor(private _apiService: ApiService, ) { }

  ngOnInit() {
    this.sprints =_.sortBy(this._apiService.getAllSprints(), 'current').reverse();
  }

  getTeams(sprint){
    this.notify.emit(sprint);
  }
}
