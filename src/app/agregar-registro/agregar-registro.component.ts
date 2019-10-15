import {Component, Input, OnInit} from '@angular/core';
import {RegistroActividadDTO} from '../registroActividadDTO';
import {RegistroActividadService} from '../registroActividad.service';
import {ActividadService} from '../actividad.service';
import {Actividad} from '../Actividad';
import {Grupo} from '../grupo';
import {GrupoService} from '../grupo.service';

@Component({
  selector: 'app-agregar-registro',
  templateUrl: './agregar-registro.component.html',
  styleUrls: ['./agregar-registro.component.scss']
})
export class AgregarRegistroComponent implements OnInit {
  registroActividad = new RegistroActividadDTO();
  actividades: Actividad[];
  grupos: Grupo[];
  constructor(
      private registroService: RegistroActividadService,
      private actividadService: ActividadService,
      private grupoService: GrupoService,
      ) { }

  ngOnInit() {
    this.getActividades();
    this.getGrupos();
  }

  agregarRegistro(registroActividad: RegistroActividadDTO) {
    console.log(registroActividad);
    this.registroService.agregarRegistro(registroActividad);
  }

  getActividades(): void {
    this.actividadService.getActividades()
        .subscribe(Actividades => this.actividades = Actividades);
  }

  getGrupos(): void {
    this.grupoService.getGrupos()
        .subscribe(Grupos => this.grupos = Grupos);
  }

}
