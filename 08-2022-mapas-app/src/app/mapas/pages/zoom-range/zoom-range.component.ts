import { Component, ViewChild, AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [
    `.mapa-container {
      width: 100%;
      height: 100%;
    }
    
    .row {
      position: fixed;
      border-radius: 5px;
      bottom: 50px;
      left: 50px;
      padding: 10px; 
      background-color: white;
      z-index: 999;
    }
    `
  ]
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {

  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel: number = 10;
  coordenadas: { lng: number; lat: number } = { lng: -78.5219181954366, lat: -9.134615916388139 };

  constructor() { }

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.coordenadas,
      zoom: this.zoomLevel,
    });

    this.mapa.on('zoom', (event) => {
      this.zoomLevel = this.mapa.getZoom();
    });

    this.mapa.on('zoomend', (event) => {
      if (this.mapa.getZoom() > 18) {
        this.mapa.zoomTo(18);
      }
    });

    this.mapa.on('move', (event) => {
      const target = event.target;
      this.coordenadas = target.getCenter();
    });
  }

  ngOnDestroy(): void {
    this.mapa.off('zoom', () => { });
    this.mapa.off('zoomend', () => { });
    this.mapa.off('move', () => { });
  }

  zoomOut() {
    this.mapa.zoomOut();
  }

  zoomIn() {
    this.mapa.zoomIn();
  }

  zoomCambio(valor: string) {
    this.mapa.zoomTo(Number(valor));
  }

}

