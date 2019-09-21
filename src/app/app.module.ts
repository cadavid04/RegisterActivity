import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MatDialogModule} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistroActividadesComponent } from './registroActividades/registroActividades.component';
import { ReporteComponent } from './reportes/reporte.component';
import { DocenteComponent } from './docente/docente.component';
import { CursoComponent } from './curso/curso.component';
import { GrupoComponent } from './Grupo/grupo.component';
import { ActividadComponent } from './actividad/actividad.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { RegistrosComponent } from './registros/registros.component';
import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ModalGrupoComponent } from './modal-grupo/modal-grupo.component';
import {AdminLayoutModule} from './layouts/admin-layout/admin-layout.module';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TraductorComponent } from './traductor/traductor.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    MatDialogModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],

  declarations: [
    AppComponent,
    AdminLayoutComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
