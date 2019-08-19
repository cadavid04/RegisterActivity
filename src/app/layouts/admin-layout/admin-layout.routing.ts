import { Routes } from '@angular/router';

import { RegistroActividadComponent } from '../../registroActividad/registroActividad.component';
import { ReporteComponent } from '../../reportes/reporte.component';
import { DocenteComponent } from '../../docente/docente.component';
import { CursoComponent } from '../../curso/curso.component';
import { GrupoComponent } from '../../icons/grupo.component';
import { ActividadComponent } from '../../actividad/actividad.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'registroActividad',
    //     component: RegistroActividadComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'reporte',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: GrupoComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: ActividadComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: CursoComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'registroActividad',      component: RegistroActividadComponent },
    { path: 'reporte',   component: ReporteComponent },
    { path: 'docente',     component: DocenteComponent },
    { path: 'curso',     component: CursoComponent },
    { path: 'grupo',          component: GrupoComponent },
    { path: 'actividad',           component: ActividadComponent },
    { path: 'notifications',  component: NotificationsComponent },

];
