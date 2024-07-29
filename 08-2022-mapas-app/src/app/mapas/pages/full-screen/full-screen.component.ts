import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';



@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styles: [
    `#mapa {
      width: 100%;
      height: 100%;
    }`
  ]
})
export class FullScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var map = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: { lng: -78.5219181954366, lat: -9.134615916388139 },
      zoom: 14,
    });
  }

}
