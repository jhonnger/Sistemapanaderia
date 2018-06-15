import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {UnidadMedida} from '../../../interfaces/unidadMedida.interface';
import {BusquedaPaginada} from '../../../interfaces/busquedaPaginada.interface';

@Component({
  selector: 'app-um-buscador',
  templateUrl: './um-buscador.component.html',
  styleUrls: ['./um-buscador.component.css']
})
export class UmBuscadorComponent implements OnInit {

  @Output() seleccionaFila = new EventEmitter<string>();

  displayedColumns = ['pos', 'nombre', 'simbolo'];
  unidades: UnidadMedida[] = [{id: 1, nombre: 'Kilogramo', simbolo: 'kg'}];
  dataSource = new MatTableDataSource(this.unidades);

  paginacion: BusquedaPaginada = {
    paginaActual: 1,
    totalPaginas: 1
  };
  constructor() { }

  ngOnInit() {
  }
  selecciona(id: any){

    this.seleccionaFila.emit(id);
  }
  listar(event: any){

  }
  applyFilter(event: any){}

}
