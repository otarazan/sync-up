import { Component } from '@angular/core';

@Component({
	selector: 'simple-chart',
	templateUrl: './simple-chart.component.html'
})

export class SimpleChartComponent {

	// lineChart
	public lineChartData:Array<any> = [
		{data: [203, 34, 202], label: 'Sprint 1'},
		{data: [125, 48, 240], label: 'Sprint 2'},
		{data: [118, 26, 177], label: 'Sprint 3'}
	];

	//estimatedEffort
	public lineChartLabels:Array<any> = ['Estimated Effort', 'Remaining Effort', 'Actual Effort'];
	public lineChartOptions:any = {
		responsive: true
	};

	public lineChartColors:Array<any> = [
		{ // grey
		backgroundColor: 'rgba(148,159,177,0.2)',
		borderColor: 'rgba(148,159,177,1)',
		pointBackgroundColor: 'rgba(148,159,177,1)',
		pointBorderColor: '#fff',
		pointHoverBackgroundColor: '#fff',
		pointHoverBorderColor: 'rgba(148,159,177,0.8)'
		},
		{ // dark grey
	 	backgroundColor: 'rgba(77,83,96,0.2)',
	 	borderColor: 'rgba(77,83,96,1)',
	 	pointBackgroundColor: 'rgba(77,83,96,1)',
	 	pointBorderColor: '#fff',
	 	pointHoverBackgroundColor: '#fff',
	 	pointHoverBorderColor: 'rgba(77,83,96,1)'
		},
		{ // grey
		backgroundColor: 'rgba(148,159,177,0.2)',
		borderColor: 'rgba(148,159,177,1)',
		pointBackgroundColor: 'rgba(148,159,177,1)',
		pointBorderColor: '#fff',
		pointHoverBackgroundColor: '#fff',
		pointHoverBorderColor: 'rgba(148,159,177,0.8)'
		}
	];

	public lineChartLegend:boolean = true;
	public lineChartType:string = 'line';


	// events
	public chartClicked(e:any):void {
		console.log(e);
	}

	public chartHovered(e:any):void {
		console.log(e);
	}
}
