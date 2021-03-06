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

  public buscarPaisPorRegion(termino: string): Observable<any> {

    const URL = `${ this.apiUrl }/region/${ termino }`;
    return this.http.get( URL );
  }

  public buscarPaisPorCapital(termino: string): Observable<any> {

    const URL = `${ this.apiUrl }/capital/${ termino }`;
    return this.http.get( URL );
  }

  public getPais(id: string): Observable<any> {
    const URL = `${ this.apiUrl }/name/${ id }?fullText=true`;
    return this.http.get( URL );
  }

}
