import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {RegistroActividad} from './registroActividad';
import {MessageService} from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RegistroActividadService {



  private registroUrl = 'api/RegistroActividades';

  constructor(
      private http: HttpClient,
      private messageService: MessageService) { }

  getRegistroActividades(): Observable<RegistroActividad[]> {
    return this.http.get<RegistroActividad[]>(this.registroUrl)
        .pipe(
            tap(_ => this.log('fetched registros')),
            catchError(this.handleError<RegistroActividad[]>('getRegistroActividades', []))
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
