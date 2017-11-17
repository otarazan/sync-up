import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Sprints } from '../mock/sprint.data';
import { Gcr } from '../mock/gcr.data';
import { Teams } from '../mock/team.data';
import * as _ from 'lodash';

const server :string = 'http://localhost:8080';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {

   }

  getAllSprints(){
    return this.http.get(server+ '/dashboard/v1/sprint');
  }

  getTeamsBySprintId(id:string){
    return this.http.get(`${server}/dashboard/v1/sprint/${id}`);
  }

  getGCRsByUSId(id:string){
    return this.http.get(`${server}/dashboard/v1/gerritReview/${id}`);
  }

}
