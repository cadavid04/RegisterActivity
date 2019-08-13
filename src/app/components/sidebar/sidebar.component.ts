import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Registro Actividad',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'Reportes',  icon:'person', class: '' },
    { path: '/table-list', title: 'Gestión de doncentes',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'Gestión de cursos',  icon:'library_books', class: '' },
    { path: '/icons', title: 'Gestión de grupos',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'Gestión de actividades',  icon:'location_on', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
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
