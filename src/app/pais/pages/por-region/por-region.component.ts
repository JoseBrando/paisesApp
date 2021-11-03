import { Component } from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right: 10px;
    }
  `]
})
export class PorRegionComponent {

  public regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public regionActiva: string = '';
  // public hayError = false;
  // public paises: any[] = [];
  // public termino: string = '';
  // public componente: string = 'Por region';

  constructor() { }

  public activarRegion( region: string ): void {
    this.regionActiva = region;
  }

  public getClaseCSS(region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  // public respuestaService(paises: []): void {
  //   this.paises = paises;
  // }

  // public respuestaError(obj: any): void {
  //   this.hayError = obj.error;
  //   this.termino = obj.termino;
  // }

}
