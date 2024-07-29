import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';

import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  doughnutChartType: ChartType = 'doughnut';
  doughnutChartData: MultiDataSet = [];
  doughnutChartLabels: Label[] = [];
  colors: Color[] = [
    {
      backgroundColor: [
        '#D230FF',
        '#E327DB',
        '#FA369B',
        '#E61524',
        '#FA3C25',
      ],
    }
  ];

  constructor(private graficasService: GraficasService) { }

  ngOnInit(): void {
    //this.usuariosRedesSocialesFormaUno();
    this.usuariosRedesSocialesFormaDos();
  }

  usuariosRedesSocialesFormaUno(): void {
    this.graficasService.getUsuariosRedesSociales()
      .subscribe(redesSociales => {
        const labels = Object.keys(redesSociales);
        const values = Object.values(redesSociales);
        this.doughnutChartLabels = labels;
        this.doughnutChartData.push(values);
      });
  }

  usuariosRedesSocialesFormaDos(): void {
    this.graficasService.getUsuariosRedesSocialesRefactorizado()
      .subscribe(({ labels, values }) => {
        this.doughnutChartLabels = labels;
        this.doughnutChartData.push(values)
      });
  }

}
