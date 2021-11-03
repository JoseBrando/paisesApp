import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  public hayError = false;
  public paises: any[] = [];
  public termino: string = '';
  public componente: string = 'Por capital';
  

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

}
