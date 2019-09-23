import { Component, OnInit } from '@angular/core';
import { RegistroActividad } from '../registroActividad';
import { RegistroActividadService} from '../registroActividad.service';
import {TranslateService} from '@ngx-translate/core';
import {TraductorComponent} from '../traductor/traductor.component';
import {Observable} from 'rxjs';
import {RegistroActividadDTO} from '../registroActividadDTO';



@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.scss']
})
export class RegistrosComponent implements OnInit {
  suma: number;

  registroActividadesDTO: RegistroActividadDTO[];
  registroActividades: RegistroActividad[];
  constructor(private registroActividadesService: RegistroActividadService,){
  }

  ngOnInit() {
    this.getRegistros();
  }

  getRegistros(): void {
    this.registroActividadesService.getRegistroActividades()
        .subscribe(RegistroActividades => this.registroActividadesDTO = RegistroActividades);
  }

  deleteRegistro(registroActividad: RegistroActividadDTO): void {
    this.registroActividadesDTO = this.registroActividadesDTO.filter(h => h !== registroActividad);
    this.registroActividadesService.deleteRegistro(registroActividad).subscribe();
  }

  public getTotalTiempo() {
    return this.registroActividadesService.getSumaTiempo().subscribe(RegistroActividades => this.registroActividades = RegistroActividades);
  }

  clickMethod(registroActividad: RegistroActividadDTO) {
    if (confirm("¿Está seguro de borrar este registro de actividad?")) {
      console.log(this.deleteRegistro(registroActividad));
    }
  }
}

