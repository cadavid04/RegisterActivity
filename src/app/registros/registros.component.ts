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

}
