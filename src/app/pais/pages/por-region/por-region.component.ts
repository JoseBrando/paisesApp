import { Component } from '@angular/core';

// Services
import { PaisService } from '../../services/pais.service';



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
  public paises: any[] = [];
  public termino: string = '';
  public componente: string = 'Por region';

  constructor(private paisService: PaisService) { }

  public activarRegion( region: string ): void {
    this.regionActiva = region;

    this.paisService.buscarPaisPorRegion(region)
    .subscribe((response) => {
      this.paises = response;
    });
  }

  public getClaseCSS(region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

}
