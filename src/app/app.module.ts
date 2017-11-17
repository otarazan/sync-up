import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, EventEmitter } from '@angular/core';
import {ApiService} from './api.service'
import { AppComponent } from './app.component';
import { Http } from '@angular/http';
import { TeamsComponent } from './teams/teams.component';
import { SprintsComponent } from './sprints/sprints.component';
import { SimpleChartComponent } from './simple-chart/simple-chart.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    SprintsComponent,
    SimpleChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
