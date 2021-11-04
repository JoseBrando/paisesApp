import { Component, OnInit } from '@angular/core';

// Service
import { PaisService } from '../../services/pais.service';



@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li {
      cursor: pointer;
    }
  `]
})
export class PorPaisComponent implements OnInit {

  public hayError = false;
  public paises: any[] = [];
  public paisesSugeridos: any[] = [];
  public termino: string = '';
  public componente: string = 'Por pais';

  constructor(private paisService: PaisService) { }

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
    // this.termino = termino;

    this.paisService.buscarPais(termino)
    .subscribe(paises => this.paisesSugeridos = paises.slice(0, 10),
               err => this.paisesSugeridos = []);
  }

}
