import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

interface MarcadorColor {
  color: string;
  marker?: mapboxgl.Marker;
  coordenadas?: Coordenadas;
}

interface Coordenadas {
  lng: number;
  lat: number;
}

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [
    `.mapa-container {
      width: 100%;
      height: 100%;
    }

    .list-group {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 999;
      cursor: pointer;
    }
    `
  ]
})
export class MarcadoresComponent implements AfterViewInit {

  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel: number = 14;
  coordenadas: { lng: number; lat: number } = { lng: -78.5219181954366, lat: -9.134615916388139 };
  marcadores: MarcadorColor[] = [];

  constructor() { }

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.coordenadas,
      zoom: this.zoomLevel,
    });

    this.leerLocalStorage();
  }

  agregarMarcador(): void {
    const color = "#xxxxxx".replace(/x/g, y => (Math.random() * 16 | 0).toString(16));
    const nuevoMarcador = new mapboxgl.Marker({
      draggable: true,
      color
    })
      .setLngLat(this.coordenadas)
      .addTo(this.mapa);

    this.marcadores.push({
      color,
      marker: nuevoMarcador
    });

    this.guardarMarcadoresLocalStorage();

    nuevoMarcador.on('dragend', () => {
      this.guardarMarcadoresLocalStorage();
    });
  }

  irMarcador(marcador: mapboxgl.Marker): void {
    this.mapa.flyTo({
      center: marcador.getLngLat(),
    });
  }

  guardarMarcadoresLocalStorage(): void {
    const lngLatArr: MarcadorColor[] = [];

    this.marcadores.forEach(m => {
      const color = m.color;
      const lngLat = m.marker!.getLngLat();

      lngLatArr.push({
        color: color,
        coordenadas: lngLat
      });
    });

    localStorage.setItem('marcadores', JSON.stringify(lngLatArr));
  }

  leerLocalStorage(): void {
    if (!localStorage.getItem('marcadores')) return;

    const lngLatArr: MarcadorColor[] = JSON.parse(localStorage.getItem('marcadores')!);
    lngLatArr.forEach(m => {
      const newMarker = new mapboxgl.Marker({
        color: m.color,
        draggable: true,
      })
        .setLngLat(m.coordenadas!)
        .addTo(this.mapa);

      this.marcadores.push({
        marker: newMarker,
        color: m.color,
      });

      newMarker.on('dragend', () => {
        this.guardarMarcadoresLocalStorage();
      });
    });
  }

  borrarMarcador(index: number): void {
    this.marcadores[index].marker?.remove(); //* Eliminamos el marcador del del mapa
    this.marcadores.splice(index, 1); //* Eliminamos el elemento del arreglo que contiene el marcador
    this.guardarMarcadoresLocalStorage();
  }

}
