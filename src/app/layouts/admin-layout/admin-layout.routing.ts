import { Routes } from '@angular/router';

import { RegistroActividadesComponent } from '../../registroActividades/registroActividades.component';
import { ReporteComponent } from '../../reportes/reporte.component';
import { DocenteComponent } from '../../docente/docente.component';
import { CursoComponent } from '../../curso/curso.component';
import { GrupoComponent } from '../../icons/grupo.component';
import { ActividadComponent } from '../../actividad/actividad.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {RegistrosComponent} from '../../registros/registros.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'registroActividades',
    //     component: RegistroActividadesComponent
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
    { path: 'registroActividades',      component: RegistroActividadesComponent },
    { path: 'registros',      component: RegistrosComponent },
    { path: 'reporte',   component: ReporteComponent },
    { path: 'docente',     component: DocenteComponent },
    { path: 'curso',     component: CursoComponent },
    { path: 'grupo',          component: GrupoComponent },
    { path: 'actividad',           component: ActividadComponent },
    { path: 'notifications',  component: NotificationsComponent },

]
