import {Component, OnInit} from '@angular/core';
import {UnidadMedida} from '../../../interfaces/unidadMedida.interface';
import {UnidadMedidaService} from '../../../services/unidad-medida.service';
import {UtilService} from '../../../services/util.service';

@Component({
  selector: 'app-um-formulario',
  templateUrl: './um-formulario.component.html',
  styleUrls: ['./um-formulario.component.css']
})
export class UmFormularioComponent implements OnInit {

  unidadMedida: UnidadMedida = {};
  controls = true;
  constructor(private _unidadadMedidaService: UnidadMedidaService,
              private _utilService: UtilService) { }

  ngOnInit() {
  }

  traer(id: number) {
    this._utilService.showLoading();
    this._unidadadMedidaService.leer(id).subscribe(
      (data: any) => {
        this._utilService.hideLoading();

        if (data.success) {
          this.unidadMedida = data.data;
          this.controls = false;
        }
      }, err => {
        this._utilService.hideLoading();
      }
    );
  }
  reiniciarFormulario() {
    this.unidadMedida = { };
    this.controls = false;
  }

  guardar(){
    this._unidadadMedidaService.guardar(this.unidadMedida).subscribe(
      (data: any) => {

      }, err => {

      }
    );
  }

}
