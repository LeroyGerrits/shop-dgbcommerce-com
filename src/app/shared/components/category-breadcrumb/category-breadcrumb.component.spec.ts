import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryBreadcrumbComponent } from './category-breadcrumb.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProductTileComponent', () => {
  let component: CategoryBreadcrumbComponent;
  let fixture: ComponentFixture<CategoryBreadcrumbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CategoryBreadcrumbComponent]
    });
    fixture = TestBed.createComponent(CategoryBreadcrumbComponent);
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