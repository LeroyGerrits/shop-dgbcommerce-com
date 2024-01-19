import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTileComponent } from './product-tile.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProductTileComponent', () => {
  let component: ProductTileComponent;
  let fixture: ComponentFixture<ProductTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ProductTileComponent]
    });
    fixture = TestBed.createComponent(ProductTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display 3 full, 1 half and 1 empty star when a merchant\'s score is 3.5', () => {
    component.ngOnInit();
  });

  it('should display 4 full and 1 empty star when a merchant\'s score is 4', () => {
    component.ngOnInit();
  });
});