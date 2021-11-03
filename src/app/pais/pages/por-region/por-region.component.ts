import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent implements OnInit {

  public hayError = false;
  public paises: any[] = [];
  public termino: string = '';
  public componente: string = 'Por region';

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
