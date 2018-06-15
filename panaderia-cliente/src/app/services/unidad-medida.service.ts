import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppSettings} from '../endPoint.config';
import {Constantes} from '../util/constantes';
import {UnidadMedida} from '../interfaces/unidadMedida.interface';
import {RequestOptions} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UnidadMedidaService {

  url = AppSettings.API_ENDPOINT + 'api/unidad-medida';
  constructor(private http: HttpClient) {

  }

  listar() {

    return this.http.get( this.url)
      .pipe(map( res => {
          return res; }
      ));
  }

  paginar(pagina: number = 1) {
    const cant = Constantes.cantPorPagina;
    return this.http.get(this.url + '/paginar?page=' + pagina )
      .pipe(map( res => {
        return res; }
      ));
  }
  leer(id) {
    const cant = Constantes.cantPorPagina;
    return this.http.get(this.url + '/' + id )
      .pipe(map( res => {
        return res; }
      ));
  }
  guardar(unidadMedida: UnidadMedida) {

    return this.http.post( this.url, unidadMedida, this.jwt())
      .pipe(map( res => {
        return res; }
      ));
  }
  private jwt() {
    // create authorization header with jwt token
    const token = (localStorage.getItem('token'));
    if (token) {
      const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + token });
      return { headers: headers };
    }
  }
}
