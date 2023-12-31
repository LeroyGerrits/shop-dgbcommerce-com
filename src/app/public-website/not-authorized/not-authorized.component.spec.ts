import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicWebsiteNotAuthorizedComponent } from './not-authorized.component';

describe('PublicWebsiteNotAuthorizedComponent', () => {
  let component: PublicWebsiteNotAuthorizedComponent;
  let fixture: ComponentFixture<PublicWebsiteNotAuthorizedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicWebsiteNotAuthorizedComponent]
    });
    fixture = TestBed.createComponent(PublicWebsiteNotAuthorizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});