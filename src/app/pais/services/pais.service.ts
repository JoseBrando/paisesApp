import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  public buscarPais(termino: string): Observable<any> {

    const URL = `${ this.apiUrl }/name/${ termino }`;
    return this.http.get( URL );

    // return this.http.get( URL )
    // .pipe(
    //   catchError(err => of(['Ocurrio un error']))
    // );
  }

}
