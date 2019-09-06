import { Component, OnInit } from '@angular/core';
import { RegistroActividad } from '../registroActividad';
import { RegistroActividadService} from '../registroActividad.service';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.scss']
})
export class RegistrosComponent implements OnInit {

  registroActividades: RegistroActividad[];


  constructor(private registroActividadesService: RegistroActividadService,
              private translate: TranslateService) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('es');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/es|en/) ? browserLang : 'es');
  }

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
    return this.registroActividadesService.getSumaTiempo().subscribe();
  }
}
