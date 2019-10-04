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
import { GrupoComponent } from './grupo/grupo.component';
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
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import {FooterComponent} from './components/footer/footer.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import { AgregarRegistroComponent } from './agregar-registro/agregar-registro.component';



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
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,

    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
    AdminLayoutModule
  ],

  declarations: [
    AppComponent,
    AdminLayoutComponent],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
