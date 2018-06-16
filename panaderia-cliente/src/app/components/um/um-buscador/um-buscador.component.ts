import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {UnidadMedida} from '../../../interfaces/unidadMedida.interface';
import {BusquedaPaginada} from '../../../interfaces/busquedaPaginada.interface';
import {UnidadMedidaService} from '../../../services/unidad-medida.service';
import {UtilService} from '../../../services/util.service';

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
  constructor(private _unidadadMedidaService: UnidadMedidaService,
              private _utilService: UtilService) { }

  ngOnInit() {
    this.listar();
  }
  selecciona(id: any) {

    this.seleccionaFila.emit(id);
  }
  listar(pagina = 1) {
    this._utilService.showLoading();
    this._unidadadMedidaService.paginar(pagina).subscribe(
      (data: any) => {
        this._utilService.hideLoading();
        if (data.success) {
          const paginacion: any  = data.data;
          this.unidades = paginacion.data;
          this.paginacion.paginaActual = paginacion.current_page;

          const total = paginacion.total;
          const per_page = paginacion.per_page;

          this.paginacion.totalPaginas = Math.floor(total / per_page) + ((total % per_page === 0) ? 0 : 1);
          this.dataSource = new MatTableDataSource(this.unidades);
          console.log(paginacion);
        }
      }, err => {
        this._utilService.hideLoading();
        console.log('Error');
      }
    );
  }
  applyFilter(event: any) {}

}
