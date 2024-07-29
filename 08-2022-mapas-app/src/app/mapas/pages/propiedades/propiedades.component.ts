import { Component } from '@angular/core';

interface Propiedad {
  titulo: string;
  descripcion: string;
  coordenadas: Coordenadas;
}

interface Coordenadas {
  lng: number;
  lat: number;
}

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styles: [
  ]
})
export class PropiedadesComponent {

  propiedades: Propiedad[] = [
    {
      titulo: 'Plaza de Armas de Chimbote',
      descripcion: 'La gran plaza de Armas de Chimbote',
      coordenadas: { lng: -78.59363246512346, lat: -9.074504172549856 }
    },
    {
      titulo: 'Plaza de Armas de Nuevo Chimbote',
      descripcion: 'Hermosa plaza mayor de Nuevo Chimbote, la más grande del Perú',
      coordenadas: { lng: -78.5311250472251, lat: -9.122096397876799, }
    },
    {
      titulo: 'Plaza de Armas de Santa',
      descripcion: 'La gran plaza de Armas de Santa City',
      coordenadas: { lng: -78.61656178992662, lat: -8.991834526761094 }
    },
    {
      titulo: 'Plaza de Armas de Trujillo',
      descripcion: 'La gran plaza de Armas de Trujillo, la ciudad de la primavera',
      coordenadas: { lng: -79.02841578516632, lat: -8.111577597622512 }
    },
    {
      titulo: 'Plaza de Armas de Lima',
      descripcion: 'La gran plaza de Armas de Lima, ciudad de los reyes',
      coordenadas: { lng: -77.03078425870982, lat: -12.045929297961408 }
    },
    {
      titulo: 'Plaza de Armas de Arequipa',
      descripcion: 'La gran plaza de Armas de Arequipa, país blanco',
      coordenadas: { lng: -71.53680959855399, lat: -16.39886051858786 }
    },
    {
      titulo: 'Plaza de Armas de Cajamarca',
      descripcion: 'La gran plaza de Armas de Cajamarca, ciudad del carnaval',
      coordenadas: { lng: -78.5174858195956, lat: -7.157228086995852 }
    },
  ];



}
