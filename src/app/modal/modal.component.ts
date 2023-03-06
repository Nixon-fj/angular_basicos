import { Component, ElementRef, HostListener  } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  constructor(private elRef: ElementRef) { }

  component: string = 'Click here'

  @HostListener('document:mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
  if (!this.elRef.nativeElement.contains(event.target)) {
    this.component = 'Clicked outside the component';
  }
  if (this.elRef.nativeElement.contains(event.target)) {
    this.component = 'Clicked inside the component';
  }
}

}
