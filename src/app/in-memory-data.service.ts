import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const RegistroActividades = [
      {id_docente: 11, id_grupo: 11, id_actividad: 11, fecha: 11, id: 1 },
      {id_docente: 11, id_grupo: 11, id_actividad: 6, fecha: 11, id: 2 }

    ];
    return {RegistroActividades};
  }
}

