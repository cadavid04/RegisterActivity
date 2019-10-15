import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MessageService} from './message.service';
import {Observable, of} from 'rxjs';
import {Grupo} from './grupo';
import {catchError, tap} from 'rxjs/operators';
import {Actividad} from './Actividad';
import {RegistroActividadDTO} from './registroActividadDTO';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {


  constructor(
      private http: HttpClient,
      private messageService: MessageService) { }

  getActividades(): Observable<Actividad[]> {
    return this.http.get<Actividad[]>('http://localhost:8080/docente-api/actividades/actividad/1')
        .pipe(
            tap(_ => this.log('fetched actividades')),
            catchError(this.handleError<Actividad[]>('getActividades', []))
        );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  private log(message: string) {
    this.messageService.add(`GetGrupos: ${message}`);
  }


}
