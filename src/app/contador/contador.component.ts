import { Component} from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  title: string = 'Contador App';
  numero: number = 0;
  suma: number = 5;
  resta: number = -5;

  acomular(num: number){
    this.numero += num;
  }
}
