import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EncuestasService {

  baseUrl = 'http://localhost:5000/encuestas/';

  constructor(private http: HttpClient) { }

  crearEncuesta(model: any) {
    return this.http.post(this.baseUrl + 'nueva', model)
      .pipe(
        map((response: any) => {
          const encuesta = response;
          if (encuesta) {
            return true;
          }
        })
      );
  }

  verEncuesta(IdEncuesta: any) {
    return this.http.post(this.baseUrl + 'ver/byid', IdEncuesta)
    .pipe(
      map((response: any) => {
        const encuesta = response;
        if (encuesta) {
          return encuesta;
        }
      })
    );
  }

  verEncuestas() {
    return this.http.get(this.baseUrl + 'ver/todas')
    .pipe(
      map( (response) => {
        const encuestas = response;
        console.log(encuestas)
        if (encuestas) {
          return encuestas;
        }
      })
    )
  }

}
