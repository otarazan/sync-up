import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ApiService} from './api.service'
import { AppComponent } from './app.component';
import { Http } from '@angular/http';
import { TeamsComponent } from './teams/teams.component';
import { SprintsComponent } from './sprints/sprints.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    SprintsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
