import { Component, OnInit } from '@angular/core';
import { RegistroActividad } from '../registroActividad';
import { RegistroActividadService} from '../registroActividad.service';
import {TranslateService} from '@ngx-translate/core';
import {TraductorComponent} from '../traductor/traductor.component';
import {Observable} from 'rxjs';
import {RegistroActividadDTO} from '../registroActividadDTO';
import {ActividadService} from '../actividad.service';
import {Actividad} from '../Actividad';
import {GrupoService} from '../grupo.service';
import {Grupo} from '../grupo';



@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.scss']
})
export class RegistrosComponent implements OnInit {
  suma: number;
  grupos: Grupo[];
  grupo: string;

  registroActividadesDTO: RegistroActividadDTO[];
  registroActividades: RegistroActividad[];
  Actividades: Actividad[];
  constructor(private registroActividadesService: RegistroActividadService,
              private actividadService: ActividadService,
              private grupoService: GrupoService) {}

  ngOnInit() {

    this.getGrupos();

  }

  getRegistros(): void {
    this.registroActividadesService.getRegistroActividades()
        .subscribe(RegistroActividades => this.registroActividadesDTO = RegistroActividades);
  }

  getRegistrosGrupo(grupo: string): void {
    this.registroActividadesService.getRegistroActividadesGrupo(grupo)
        .subscribe(RegistroActividades => this.registroActividadesDTO = RegistroActividades);
  }

  getGrupos(): void {
    this.grupoService.getGrupos()
        .subscribe(grupos => this.grupos = grupos);
  }

    getActividades(): void {
        this.actividadService.getActividades()
            .subscribe(Actividades => this.Actividades = Actividades);
    }

  deleteRegistro(registroActividad: RegistroActividadDTO): void {
    this.registroActividadesDTO = this.registroActividadesDTO.filter(h => h !== registroActividad);
    this.registroActividadesService.deleteRegistro(registroActividad).subscribe();
  }

  public getTotalTiempo() {
    return this.registroActividadesService.getSumaTiempo().subscribe(RegistroActividades => this.registroActividades = RegistroActividades);
  }

  clickMethod(registroActividad: RegistroActividadDTO) {
    if (confirm('¿Está seguro de borrar este registro de actividad?')) {
      console.log(this.deleteRegistro(registroActividad));
    }
  }
}

