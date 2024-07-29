import { Component, OnInit } from '@angular/core';

import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
    `.grafica-container{
      display: block;
    }
    `
  ]
})
export class DonaComponent implements OnInit {

  doughnutChartType: ChartType = 'doughnut';
  doughnutChartData: MultiDataSet = [
    [350, 450, 100, 720],
  ];
  doughnutChartLabels: Label[] = ['Download sales', 'In store sales', 'Mail order sales', 'Otros'];
  colors: Color[] = [
    {
      backgroundColor: [
        '#FF5654',
        '#E35C46',
        '#FA845A',
        '#E67B35',
      ],
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
