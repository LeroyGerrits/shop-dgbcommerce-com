import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddToCartComponent } from './dialog.add-to-cart.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TestDataProducts } from 'src/assets/test-data/Products';

describe('DialogAddToCartComponent', () => {
  let component: DialogAddToCartComponent;
  let fixture: ComponentFixture<DialogAddToCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogAddToCartComponent],
      imports: [MatDialogModule]
    });
    fixture = TestBed.createComponent(DialogAddToCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create with a custom dialogMessage', () => {
    component.product = TestDataProducts[0];
    expect(component).toBeTruthy();
  });
});
