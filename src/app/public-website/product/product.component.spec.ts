import { ActivatedRoute, RouterLink } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialog } from '@angular/material/dialog';
import { PublicWebsiteProductComponent } from './product.component';
import { QRCodeModule } from 'angularx-qrcode';
import { of } from 'rxjs';

describe('PublicWebsiteProductComponent', () => {
  let component: PublicWebsiteProductComponent;
  let fixture: ComponentFixture<PublicWebsiteProductComponent>;

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
      declarations: [PublicWebsiteProductComponent],
      imports: [RouterLink, QRCodeModule],
      providers: [
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
        { provide: MatDialog, useValue: matDialogSpy }
      ]
    });
    fixture = TestBed.createComponent(PublicWebsiteProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should ', () => {
    
  });
});