import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';

@Component({
  selector: 'sprints',
  templateUrl: './sprints.component.html',
  styleUrls: ['./sprints.component.css']
})
export class SprintsComponent implements OnInit {

  sprints:any;


  constructor(private _apiService: ApiService) { }

  ngOnInit() {
    this.sprints = this._apiService.getAllSprints();
  }

}
