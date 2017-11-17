import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Sprints } from '../mock/sprint.data';
import { Gcr } from '../mock/gcr.data';

// const sprints: any = require('../mock/sprint.json');
// const gcrs: any = require('../mock/gcr.json');

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {

   }

  getAllSprints(){
    return Sprints;

    // return this.http.get(this.spring)
    // .map( (response: Response) => {
    //   const data = response.json();
    //   return data; } );
  }

  getSprintById(id:string){
    return Observable.of(Sprints);

  }

  getGCRsByUSId(id:string){
    return Observable.of(Sprints);
  }

}
