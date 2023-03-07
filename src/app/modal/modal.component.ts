import { Component, ElementRef, HostListener  } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  constructor(private elRef: ElementRef) { }

  component: string = 'Click dentro o fuera del modal'

  closeModal(){
    let modal = document.getElementById('demo-modal');
    if(modal?.classList.contains('show')){
      modal.classList.remove('show');
    }
    else{
      modal?.classList.add('show');
    }
  }

  @HostListener('document:mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
  if (!this.elRef.nativeElement.contains(event.target)) {
    this.component = 'Se hizo click fuera del modal';
  }
  if (this.elRef.nativeElement.contains(event.target)) {
    this.component = 'Se hizo click dentro del modal';
  }
}

}
