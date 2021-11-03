import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {

  public hayError = false;
  public paises: any[] = [];
  public termino: string = '';
  public componente: string = 'Por pais';

  constructor() { }

  ngOnInit(): void {
  }

  public respuestaService(paises: []): void {
    this.paises = paises;
  }

  public respuestaError(obj: any): void {
    this.hayError = obj.error;
    this.termino = obj.termino;
  }

  public sugerencias(termino: string): void {
    this.hayError = false;
  }

}
