import {Component, Input, OnInit} from '@angular/core';
import {RegistroActividadDTO} from '../registroActividadDTO';
import {RegistroActividadService} from '../registroActividad.service';

@Component({
  selector: 'app-agregar-registro',
  templateUrl: './agregar-registro.component.html',
  styleUrls: ['./agregar-registro.component.scss']
})
export class AgregarRegistroComponent implements OnInit {
  registroActividad = new RegistroActividadDTO();

  constructor(private registroService: RegistroActividadService) { }

  ngOnInit() {}

  agregarRegistro(registroActividad: RegistroActividadDTO) {
    console.log(registroActividad);
    this.registroService.agregarRegistro(registroActividad);
  }

}
