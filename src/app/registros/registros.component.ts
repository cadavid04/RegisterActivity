import { Component, OnInit } from '@angular/core';
import { RegistroActividad } from '../registroActividad';
import { RegistroActividadService} from '../registroActividad.service';


@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.scss']
})
export class RegistrosComponent implements OnInit {

  registroActividades: RegistroActividad[];

  constructor(private registroActividadesService: RegistroActividadService) { }

  ngOnInit() {
    this.getRegistros();
  }
  getRegistros(): void {
    this.registroActividadesService.getRegistroActividades()
        .subscribe(RegistroActividades => this.registroActividades = RegistroActividades);
  }

  deleteRegistro(registroActividad: RegistroActividad): void {
    this.registroActividades = this.registroActividades.filter(h => h !== registroActividad);
    this.registroActividadesService.deleteRegistro(registroActividad).subscribe();
  }
  getTotalTiempo() {
    return this.registroActividadesService.getSumaTiempo();
  }
}
