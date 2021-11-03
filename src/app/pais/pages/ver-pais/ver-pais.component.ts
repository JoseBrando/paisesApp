import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

// Services
import { PaisService } from '../../services/pais.service';



@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  public pais: any = null;

  constructor(private activatedRoute: ActivatedRoute, private paisService: PaisService) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.paisService.getPais(id)),
      tap(console.log)
    )
    .subscribe((response) => this.pais = response[0]);

    // this.activatedRoute.params
    // .subscribe(({ id }) => {
      
    //   this.paisService.getPais(id)
    //   .subscribe((response) => {
    //     console.log(response);
    //   });

    // });

  }

}
