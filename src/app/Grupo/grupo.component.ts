import { Component, OnInit } from '@angular/core';
import {Grupo} from '../grupo';
import {GrupoService} from '../grupo.service';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent implements OnInit {
  grupos: Grupo[];

  constructor(private grupoService: GrupoService) { }

  ngOnInit() {
    this.getGrupos();
  }

  getGrupos(): void {
    this.grupoService.getGrupos()
        .subscribe(grupos => this.grupos = grupos);
  }

}
