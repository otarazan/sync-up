import { Injectable } from '@angular/core';


const sprints: any = require('../mock/sprint.json');
const gcrs: any = require('../mock/gcr.json');

@Injectable()
export class ApiService {

  constructor() { 
   }

  getAllSprints(){
    console.log(sprints);
    return sprints;
  }

  getSprintById(id:string){
    console.log(sprints);
    return sprints[id];
  }

  getGCRsByUSId(id:string){
      console.log(gcrs);
      return gcrs;
  }

}
