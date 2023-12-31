import { ActivatedRoute, RouterLink } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialog } from '@angular/material/dialog';
import { PublicWebsiteIndexComponent } from './index.component';
import { QRCodeModule } from 'angularx-qrcode';
import { of } from 'rxjs';

describe('PublicWebsiteIndexComponent', () => {
  let component: PublicWebsiteIndexComponent;
  let fixture: ComponentFixture<PublicWebsiteIndexComponent>;

  let matDialogRefSpy: any;
  let matDialogSpy: jasmine.SpyObj<MatDialog>

  const fakeActivatedRoute = {
    snapshot: { data: {} }
  } as ActivatedRoute;

  beforeEach(() => {
    matDialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);
    matDialogRefSpy.componentInstance = { title: '', message: '' };
    matDialogRefSpy.afterClosed = () => of(true);

    matDialogSpy = jasmine.createSpyObj('MatDialog', ['open']);
    matDialogSpy.open.and.returnValue(matDialogRefSpy);

    TestBed.configureTestingModule({
      declarations: [PublicWebsiteIndexComponent],
      imports: [RouterLink, QRCodeModule],
      providers: [
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
        { provide: MatDialog, useValue: matDialogSpy }
      ]
    });
    fixture = TestBed.createComponent(PublicWebsiteIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show a donate dialog', () => {
    component.donate();
    expect(matDialogSpy.open).toHaveBeenCalled();
    expect(matDialogRefSpy.close).toHaveBeenCalled();
  });

  it('should show a sign up dialog', () => {
    component.signUp();
    expect(matDialogSpy.open).toHaveBeenCalled();
    expect(matDialogRefSpy.close).toHaveBeenCalled();
  });
});