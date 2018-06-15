import {Component, OnInit} from '@angular/core';
import {UnidadMedida} from '../../../interfaces/unidadMedida.interface';

@Component({
  selector: 'app-um-formulario',
  templateUrl: './um-formulario.component.html',
  styleUrls: ['./um-formulario.component.css']
})
export class UmFormularioComponent implements OnInit {

  unidadMedida: UnidadMedida = {};
  controls = true;
  constructor() { }

  ngOnInit() {
  }

}
