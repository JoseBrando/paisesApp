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

  public termino: string = 'Hola Mundo';
  public hayError = false;

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  public buscar(): void {
    this.paisService.buscarPais(this.termino)
    .subscribe((response) => {
      console.log(response);
    },
    (error) => {

      this.hayError = true;
      setTimeout(() => {
        this.hayError = false;
      }, 3500)
    });
  }

}
