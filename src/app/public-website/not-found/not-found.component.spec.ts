import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicWebsiteNotFoundComponent } from './not-found.component';

describe('PublicWebsiteNotFoundComponent', () => {
  let component: PublicWebsiteNotFoundComponent;
  let fixture: ComponentFixture<PublicWebsiteNotFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicWebsiteNotFoundComponent]
    });
    fixture = TestBed.createComponent(PublicWebsiteNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
