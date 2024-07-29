import { Component, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

interface Coordenadas {
  lng: number;
  lat: number;
}

@Component({
  selector: 'app-mini-mapa',
  templateUrl: './mini-mapa.component.html',
  styles: [
    `div {
      width: 100%;
      height: 350px;
      margin: 0px;
    }`
  ]
})
export class MiniMapaComponent implements AfterViewInit {

  @Input() coordenadas!: Coordenadas;
  @ViewChild('mapa') divMapa!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    const mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.coordenadas,
      zoom: 14,
      interactive: false,
    });

    new mapboxgl.Marker()
      .setLngLat(this.coordenadas)
      .addTo(mapa);
  }

}
