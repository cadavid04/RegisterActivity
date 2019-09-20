import { Routes } from '@angular/router';

import { RegistroActividadesComponent } from '../../registroActividades/registroActividades.component';
import { ReporteComponent } from '../../reportes/reporte.component';
import { DocenteComponent } from '../../docente/docente.component';
import { CursoComponent } from '../../curso/curso.component';
import { GrupoComponent } from '../../grupo/grupo.component';
import { ActividadComponent } from '../../actividad/actividad.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { RegistrodetalleComponent } from '../../registrodetalle/registrodetalle.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'registroActividades',      component: RegistroActividadesComponent },
    { path: 'reporte',   component: ReporteComponent },
    { path: 'docente',     component: DocenteComponent },
    { path: 'curso',     component: CursoComponent },
    { path: 'grupo',          component: GrupoComponent },
    { path: 'actividad',           component: ActividadComponent },
    { path: 'detail/:id', component: RegistrodetalleComponent },
    { path: 'notifications',  component: NotificationsComponent },
];
