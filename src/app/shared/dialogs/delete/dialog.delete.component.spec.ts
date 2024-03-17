import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteComponent } from './dialog.delete.component';
import { MatDialogModule } from '@angular/material/dialog';

describe('DialogDeleteComponent', () => {
  let component: DialogDeleteComponent;
  let fixture: ComponentFixture<DialogDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogDeleteComponent],
      imports: [MatDialogModule]
    });
    fixture = TestBed.createComponent(DialogDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create with a custom dialogMessage', () => {
    component.dialogMessage = 'Custom message';
    expect(component).toBeTruthy();
  });
});
