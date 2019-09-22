import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {RegistroActividad} from './registroActividad';
import {MessageService} from './message.service';
import {RegistroActividadDTO} from './registroActividadDTO';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RegistroActividadService {



  private registroUrl = 'http://localhost:8080/docente-api/registrosactividad/registros/1';

  constructor(
      private http: HttpClient,
      private messageService: MessageService) { }

  getRegistroActividades(): Observable<RegistroActividadDTO[]> {
    return this.http.get<RegistroActividadDTO[]>('http://localhost:8080/docente-api/registrosactividad/registros/1')
        .pipe(
            tap(_ => this.log('fetched registros')),
            catchError(this.handleError<RegistroActividadDTO[]>('getRegistroActividades', []))
        );
  }

  getSumaTiempo(): Observable<any> {
    return this.http.get<number>('http://localhost:8080/docente-api/registrosactividad/suma/1')
        .pipe(
            tap(_ => this.log('fetched number')),
            catchError(this.handleError<any>('getSumaTiempo' ))
        );
  }

  getRegistro(id: number): Observable<RegistroActividad> {
    const url = `http://localhost:8080/docente-api/registrosactividad/${id}`;
    return this.http.get<RegistroActividad>(url).pipe(
        tap(_ => this.log(`fetched hero id=${id}`)),
        catchError(this.handleError<RegistroActividad>(`getRegistro id=${id}`))
    );
  }


  deleteRegistro(registroActividad: RegistroActividad | number): Observable<RegistroActividad> {
    const id = typeof registroActividad === 'number' ? registroActividad : registroActividad.id;
    const url = `http://localhost:8080/docente-api/registrosactividad/borrar/${id}`;

    return this.http.delete<RegistroActividad>(url, httpOptions).pipe(
        tap(_ => this.log(`deleteRegistro id=${id}`)),
        catchError(this.handleError<RegistroActividad>('deleteRegistro'))
    );
  }


  updateRegistro(registroActividad: RegistroActividad): Observable<any> {
    return this.http.put( 'http://localhost:8080/docente-api/registrosactividad/', registroActividad, httpOptions).pipe(
        tap(_ => this.log(`updateRegistro id=${registroActividad.id}`)),
        catchError(this.handleError<any>('updateRegistro'))
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
    this.messageService.add(`RegistroActividadService: ${message}`);
  }
}
