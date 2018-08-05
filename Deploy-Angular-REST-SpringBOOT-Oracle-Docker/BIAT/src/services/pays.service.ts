import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pays } from "../model/model.pays";
import { Observable,throwError,of } from "rxjs";
import { map,tap,catchError,retry } from 'rxjs/operators';

import { HttpErrorResponse, HttpResponse,HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

//import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
@Injectable()
export class PaysService{



    constructor(public http:HttpClient,private messageService: MessageService) { }


addPays(pays:Pays):Observable<Pays>{

         return this.http.post<Pays>("http://192.168.99.100:8080/pays?paysName="+pays.paysName+
         "&libelle="+pays.libelle
         ,pays);
}

updatePays(pays:Pays):Observable<Pays>{

    return this.http.post<Pays>("http://192.168.99.100:8080/updatePays"
    ,pays);
}


getPays(): Observable<Pays[]>{

     return this.http.get<Pays[]>("http://192.168.99.100:8080/affichePays");

}

getPaysByRef(reference:number): Observable<Pays[]>
{
        return this.http.get<Pays[]>("http://192.168.99.100:8080/paysByReference/"+reference);
      }


getPaysParMc(motCle:string,pageNumber:number): Observable<Pays[]>
{
    return this.http.get<Pays[]>("http://192.168.99.100:8080/paysParMotCle?motCle="+motCle+"&page="+pageNumber);

}

getPaysWithMc(motCle:string,pageNumber:number): Observable<Pays[]>
{
    return this.http.get<Pays[]>("http://192.168.99.100:8080/paysParMotCle?motCle="+motCle+"&page="+pageNumber);

}

supprimerPays(codePays:number): Observable<{}>{
    const url = 'http://192.168.99.100:8080/deletePays/${codePays}';
    return this.http.delete(url);
}


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('Pays: ' + message);
  }

}

