import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { RegistroActividadesComponent } from '../../registroActividades/registroActividades.component';
import { ReporteComponent } from '../../reportes/reporte.component';
import { DocenteComponent } from '../../docente/docente.component';
import { CursoComponent } from '../../curso/curso.component';
import { GrupoComponent } from '../../grupo/grupo.component';
import { ActividadComponent } from '../../actividad/actividad.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {RegistrosComponent} from '../../registros/registros.component';
import {ModalGrupoComponent} from '../../modal-grupo/modal-grupo.component';
import {TableModule} from 'primeng/table';
import { RegistrodetalleComponent } from '../../registrodetalle/registrodetalle.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}


import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {TraductorComponent} from '../../traductor/traductor.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {NavbarComponent} from '../../components/navbar/navbar.component';
import {SidebarComponent} from '../../components/sidebar/sidebar.component';
import {ComponentsModule} from '../../components/components.module';
import {AppModule} from '../../app.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,
    TableModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ComponentsModule,
  ],
  declarations: [
    RegistroActividadesComponent,
    ReporteComponent,
    DocenteComponent,
    CursoComponent,
    GrupoComponent,
    ActividadComponent,
    NotificationsComponent,
    UpgradeComponent,
    RegistrosComponent,
    ModalGrupoComponent,
    RegistrodetalleComponent,
  ]
})

export class AdminLayoutModule {}
