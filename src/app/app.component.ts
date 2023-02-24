import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Contador App';
  numero: number = 0;
  suma: number = 5;
  resta: number = -5;

  acomular(num: number){
    this.numero += num;
  }
}
