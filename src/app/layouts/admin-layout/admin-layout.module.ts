import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { RegistroActividadesComponent } from '../../registroActividades/registroActividades.component';
import { ReporteComponent } from '../../reportes/reporte.component';
import { DocenteComponent } from '../../docente/docente.component';
import { CursoComponent } from '../../curso/curso.component';
import { GrupoComponent } from '../../Grupo/grupo.component';
import { ActividadComponent } from '../../actividad/actividad.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {RegistrosComponent} from '../../registros/registros.component';
import {ModalGrupoComponent} from '../../modal-grupo/modal-grupo.component';


import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';

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
  ]
})

export class AdminLayoutModule {}
