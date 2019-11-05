import { Component, OnInit, Input } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {
@Input() public doughnutChartLabels: Label[] = [];
@Input() public doughnutChartData: MultiDataSet = [];
@Input()   public doughnutChartType: ChartType = 'doughnut';



  constructor() { }

  ngOnInit() {
  }

}
