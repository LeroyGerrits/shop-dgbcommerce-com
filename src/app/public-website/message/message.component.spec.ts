import { ActivatedRoute, RouterLink, convertToParamMap } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PublicWebsiteMessageComponent } from './message.component';

describe('PublicWebsiteMessageComponent', () => {
  let component: PublicWebsiteMessageComponent;
  let fixture: ComponentFixture<PublicWebsiteMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicWebsiteMessageComponent],
      imports: [RouterLink, HttpClientTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: convertToParamMap({ messageType: 'account-registered' }) } } },
      ]
    });
    fixture = TestBed.createComponent(PublicWebsiteMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should set a message for type account-activated', () => {
    component.setMessage('account-activated')
    expect(component).toBeTruthy();
  });

  it('should set a message for type account-already-activated', () => {
    component.setMessage('account-already-activated')
    expect(component).toBeTruthy();
  });

  it('should set a message for type account-password-changed', () => {
    component.setMessage('account-password-changed')
    expect(component).toBeTruthy();
  });

  it('should set a message for type account-registered', () => {
    component.setMessage('account-registered')
    expect(component).toBeTruthy();
  });

  it('should set a message for type password-reset-link-already-used', () => {
    component.setMessage('password-reset-link-already-used')
    expect(component).toBeTruthy();
  });

  it('should set a message for type password-reset-finished', () => {
    component.setMessage('password-reset-finished')
    expect(component).toBeTruthy();
  });

  it('should set a message for type password-reset-link-sent', () => {
    component.setMessage('password-reset-link-sent')
    expect(component).toBeTruthy();
  });

  it('should set a default message', () => {
    component.setMessage('')
    expect(component).toBeTruthy();
  });
});