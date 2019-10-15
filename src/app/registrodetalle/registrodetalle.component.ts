import {Component, Input, OnInit} from '@angular/core';

import { RegistroActividad } from '../registroActividad';
import { RegistroActividadService} from '../registroActividad.service';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import {RegistroActividadDTO} from '../registroActividadDTO';
import {ActividadService} from '../actividad.service';
import {Actividad} from '../Actividad';
import {Grupo} from '../grupo';
import {GrupoService} from '../grupo.service';

@Component({
  selector: 'app-registrodetalle',
  templateUrl: './registrodetalle.component.html',
  styleUrls: ['./registrodetalle.component.scss']
})
export class RegistrodetalleComponent implements OnInit {
  @Input() registroActividad: RegistroActividadDTO;
  @Input() actividad: RegistroActividadDTO;
    actividades: Actividad[];
    grupos: Grupo[];

  constructor(
      private route: ActivatedRoute,
      private registroService: RegistroActividadService,
      private location: Location,
      private actividadService: ActividadService,
      private grupoService: GrupoService
  ) {}

  ngOnInit(): void {
    this.getRegistro();
    this.getActividades();
    this.getGrupos();
  }

  getRegistro(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.registroService.getRegistro(id)
        .subscribe(registroActividadDTO => this.registroActividad = registroActividadDTO);
  }

    getActividades(): void {
        this.actividadService.getActividades()
            .subscribe(Actividades => this.actividades = Actividades);
    }

    getGrupos(): void {
        this.grupoService.getGrupos()
            .subscribe(Grupos => this.grupos = Grupos);
    }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.registroService.updateRegistro(this.registroActividad)
        .subscribe(() => this.goBack());
  }

}
