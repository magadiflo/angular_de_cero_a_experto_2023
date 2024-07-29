import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, delay } from 'rxjs';

interface RedesSociales {
  facebook: number;
  youtube: number;
  whatsapp: number;
  "facebook-messenger": number;
  instagram: number;
}

const URL: string = 'http://localhost:3000/grafica';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private http: HttpClient) { }

  getUsuariosRedesSociales(): Observable<RedesSociales> {
    return this.http.get<RedesSociales>(URL);
  }

  getUsuariosRedesSocialesRefactorizado(): Observable<{ labels: string[], values: number[] }> {
    return this.http.get<RedesSociales>(URL)
      .pipe(
        delay(1500),
        map(redesSociales => {
          const labels = Object.keys(redesSociales);
          const values = Object.values(redesSociales);
          return { labels, values };
        })
      );
  }
}
