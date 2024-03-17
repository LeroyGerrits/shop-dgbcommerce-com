import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialogModule } from '@angular/material/dialog';
import { PublicWebsiteDialogShoppingCartItemComponent } from './dialog.shopping-cart-item.component';
import { TestDataProducts } from 'src/assets/test-data/Products';

describe('PublicWebsiteDialogShoppingCartItemComponent', () => {
  let component: PublicWebsiteDialogShoppingCartItemComponent;
  let fixture: ComponentFixture<PublicWebsiteDialogShoppingCartItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicWebsiteDialogShoppingCartItemComponent],
      imports: [MatDialogModule]
    });
    fixture = TestBed.createComponent(PublicWebsiteDialogShoppingCartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
