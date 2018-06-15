import {Component, OnInit, ViewChild} from '@angular/core';
import {UmFormularioComponent} from './um-formulario/um-formulario.component';
import {UmBuscadorComponent} from './um-buscador/um-buscador.component';

@Component({
  selector: 'app-um',
  templateUrl: './um.component.html',
  styleUrls: ['./um.component.css']
})
export class UmComponent implements OnInit {

  @ViewChild(UmFormularioComponent)
  private uMFormularioComponent: UmFormularioComponent;
  @ViewChild(UmBuscadorComponent)
  private uMBuscadorComponent: UmBuscadorComponent;

  buttons = {
    nuevo: false,
    modificar: false,
    guardar: false,
    cancelar: false,
    eliminar: false,
  } ;
  constructor() { }

  ngOnInit() {
    this.reiniciarBotones();
  }
  reiniciarBotones() {
    this.modificarBotones(true, false, false, false, false);
  }

  modificarBotones(nuevo: boolean, guardar: boolean, modificar: boolean, eliminar: boolean, cancelar: boolean) {
    this.buttons.nuevo = nuevo;
    this.buttons.guardar = guardar;
    this.buttons.modificar = modificar;
    this.buttons.eliminar = eliminar;
    this.buttons.cancelar = cancelar;
  }
  nuevo () {
    this.modificarBotones(false, true, false, false, true);
  }
  modificar() {
    this.modificarBotones(false, true, false, false, true);
  }
  cancelar() {
    this.reiniciarBotones();
  }
  guardar() {

  }
  eliminar() {

  }
  salida(entrada: any){
    this.modificarBotones(false, false, true, true, true);
    //this.municipalidadFormularioComponent.traerMunicipalidad(entrada);
  }

}
