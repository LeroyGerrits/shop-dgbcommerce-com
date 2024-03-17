import { Component, Input } from '@angular/core';

@Component({
  selector: 'dialog-delete',
  templateUrl: 'dialog.delete.component.html'
})
export class DialogDeleteComponent {
  @Input() dialogMessage: string = '';
}