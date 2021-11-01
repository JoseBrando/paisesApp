import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {

  public termino: string = 'Hola Mundo';

  constructor() { }

  ngOnInit(): void {
  }

  public buscar(): void {
    console.log(this.termino);
  }

}
