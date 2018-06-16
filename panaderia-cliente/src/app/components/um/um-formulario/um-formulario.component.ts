import {Component, EventEmitter, OnInit} from '@angular/core';
import {UnidadMedida} from '../../../interfaces/unidadMedida.interface';
import {UnidadMedidaService} from '../../../services/unidad-medida.service';
import {UtilService} from '../../../services/util.service';

@Component({
  selector: 'app-um-formulario',
  templateUrl: './um-formulario.component.html',
  styleUrls: ['./um-formulario.component.css']
})
export class UmFormularioComponent implements OnInit {

  ultimoGuardado = new EventEmitter();
  unidadMedida: UnidadMedida = {};
  controls = true;
  constructor(private _unidadadMedidaService: UnidadMedidaService,
              private _utilService: UtilService) { }

  ngOnInit() {
    this.reiniciarFormulario();
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

  guardar() {
    if (!this.validarFormulario()) {
      return ;
    }
    this._utilService.showLoading();
    this._unidadadMedidaService.guardar(this.unidadMedida).subscribe(
      (data: any) => {

        this._utilService.hideLoading();
        if (data.success) {
          this._utilService.exitoMensaje('Unidad de medida guardada correctamente');
          this.reiniciarFormulario();

          this.ultimoGuardado.emit(true);
        } else {
          this._utilService.errorMensaje('Error al guardar unidada de medida');
        }
      }, err => {
        this._utilService.hideLoading();
        this._utilService.errorMensaje('Error al guardar unidada de medida');
      }
    );
  }
  validarFormulario() {
    if (!this.unidadMedida.nombre) {
      this._utilService.alertMensaje('Debe ingresar un nombre');
      return false;
    }
    if (!this.unidadMedida.simbolo) {
      this._utilService.alertMensaje('Debe ingresar un simbolo');
      return false;
    }
    return true;
  }

}
