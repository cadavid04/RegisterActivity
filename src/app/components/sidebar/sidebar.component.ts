import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/registroActividades', title: 'Registro Actividad',  icon: 'dashboard', class: '' },
    { path: '/reporte', title: 'Reportes',  icon: 'person', class: '' },
    { path: '/docente', title: 'Gestión de docentes',  icon: 'content_paste', class: '' },
    { path: '/curso', title: 'Gestión de cursos',  icon: 'library_books', class: '' },
    { path: '/grupo', title: 'Gestión de grupos',  icon: 'bubble_chart', class: '' },
    { path: '/actividad', title: 'Gestión de actividades',  icon: 'location_on', class: '' },


];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
