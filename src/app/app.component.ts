import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public option: string = 'buscarPais';

  public onOption(option: string): void {
    this.option = option;
  }

}
