import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Sprints } from '../mock/sprint.data';
import { Gcr } from '../mock/gcr.data';
import { Teams } from '../mock/team.data';
import * as _ from 'lodash';


@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {

   }

  getAllSprints(){
    return Sprints;
  }

  getTeamsBySprintId(id:string){
    let result =_.filter(Teams, function(o) { 
      console.log(o.sprintid);
      return o.sprintid == id; 
   });
   result.forEach(element => {
    element.gcr = Gcr;
   });
    console.log(result);
   return result;
  }

  getSprintById(id:string){
    return Observable.of(Sprints);

  }

  getGCRsByUSId(id:string){
    return Gcr;
  }

}
