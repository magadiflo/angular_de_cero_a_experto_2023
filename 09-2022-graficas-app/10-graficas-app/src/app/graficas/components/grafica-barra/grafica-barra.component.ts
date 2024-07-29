import { Component, Input, OnInit } from '@angular/core';

import { Label } from 'ng2-charts';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
    `.chart-container {
      display: block;
    }`
  ]
})
export class GraficaBarraComponent implements OnInit {

  @Input() horizontal: boolean = false;
  @Input() barChartLabels: Label[] = [];
  @Input() barChartData: ChartDataSets[] = [];

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  constructor() { }

  ngOnInit(): void {
    this.barChartType = this.horizontal ? 'horizontalBar' : 'bar';
  }

}
