import { Component } from '@angular/core';
import {ApiService} from './api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  s: string = "Hello2";
  
  constructor(apiService:ApiService) {
    apiService.getAllSprints();
  }
}
