import { Component, OnInit } from '@angular/core';

// Services
import { PaisService } from '../../services/pais.service';



@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {

  public termino: string = '';
  public hayError = false;
  public paises: any[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  public buscar(): void {
    this.paisService.buscarPais(this.termino)
    .subscribe((response) => {
      console.log(response);
      this.paises = response;
    },
    (error) => {

      this.hayError = true;
      this.paises = [];
      setTimeout(() => {
        this.hayError = false;
      }, 3500)
    });
  }

}
