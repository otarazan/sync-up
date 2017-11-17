import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import * as _ from 'lodash';
import { NgClass } from '@angular/common';


@Component({
  selector: 'sprints',
  templateUrl: './sprints.component.html',
  styleUrls: ['./sprints.component.css']
})
export class SprintsComponent implements OnInit {

  sprints:any;


  constructor(private _apiService: ApiService) { }

  ngOnInit() {
    this.sprints =_.sortBy(this._apiService.getAllSprints(), 'current').reverse();
    console.log(this.sprints);
  }
}