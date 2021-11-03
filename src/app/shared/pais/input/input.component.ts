import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

// Services
import { PaisService } from '../../../pais/services/pais.service';



interface Error {
  error: boolean;
  termino?: string;
}

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styles: [
  ]
})
export class InputComponent implements OnInit {

  public termino: string = '';
  @Output() emitRespuestaServise = new EventEmitter<[]>();
  @Output() emitError = new EventEmitter<Error>();
  @Output() onDebounce = new EventEmitter<string>();
  @Input('nameComponent') componente: string = '';
  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(500)
    )
    .subscribe( valor => {
      this.onDebounce.emit(valor);
    });
  }

  public onBuscar(): void {
    switch(this.componente) {
      case 'Por pais':
        this.paisService.buscarPais(this.termino)
        .subscribe((response) => {
          this.emitirRespuesta(response);
        },
        (error) => {
          this.emitirStatusError(true);
          this.emitirRespuesta([])

          setTimeout(() => {
            this.emitirStatusError(false);
          }, 3500)
        });
        break;
      case 'Por region':
        this.paisService.buscarPaisPorRegion(this.termino)
        .subscribe((response) => {
          this.emitirRespuesta(response);
        },
        (error) => {
          this.emitirStatusError(true);
          this.emitirRespuesta([])

          setTimeout(() => {
            this.emitirStatusError(false);
          }, 3500)
        });
        break;
      case 'Por capital':
        this.paisService.buscarPaisPorCapital(this.termino)
        .subscribe((response) => {
          this.emitirRespuesta(response);
        },
        (error) => {
          this.emitirStatusError(true);
          this.emitirRespuesta([])
        });
        break;
    }
  }

  private emitirRespuesta(respuesta: []): void {
    this.emitRespuestaServise.emit(respuesta);
  }

  private emitirStatusError(error: boolean): void {
    this.emitError.emit({
      error: error,
      termino: this.termino
    });
  }

  public teclaPresionada(event: any): void {
    this.debouncer.next(this.termino);
  }

}
