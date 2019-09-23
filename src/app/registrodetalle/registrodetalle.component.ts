import {Component, Input, OnInit} from '@angular/core';

import { RegistroActividad } from '../registroActividad';
import { RegistroActividadService} from '../registroActividad.service';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import {RegistroActividadDTO} from '../registroActividadDTO';

@Component({
  selector: 'app-registrodetalle',
  templateUrl: './registrodetalle.component.html',
  styleUrls: ['./registrodetalle.component.scss']
})
export class RegistrodetalleComponent implements OnInit {
  @Input() registroActividad: RegistroActividadDTO;

  constructor(
      private route: ActivatedRoute,
      private registroService: RegistroActividadService,
      private location: Location
  ) {}

  ngOnInit(): void {
    this.getRegistro();
  }

  getRegistro(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.registroService.getRegistro(id)
        .subscribe(registroActividadDTO => this.registroActividad = registroActividadDTO);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.registroService.updateRegistro(this.registroActividad)
        .subscribe(() => this.goBack());
  }

}
