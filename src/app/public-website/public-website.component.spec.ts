import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd } from '@angular/router';
import { PublicWebsiteComponent } from './public-website.component';
import { ShopService } from '../shared/services/Shop.service';
import { TestDataPublicShops } from 'src/assets/test-data/PublicShops';
import { of } from 'rxjs';
import { StatsService } from '../shared/services/Stats.service';
import { Stats } from '../shared/models/Stats.model';

describe('PublicWebsiteComponent', () => {
  let component: PublicWebsiteComponent;
  let fixture: ComponentFixture<PublicWebsiteComponent>;

  let matDialogRefSpy: any;
  let matDialogSpy: jasmine.SpyObj<MatDialog>

  let shopServiceSpy: jasmine.SpyObj<ShopService>;
  let statsServiceSpy: jasmine.SpyObj<StatsService>;

  const fakeActivatedRoute = {
    snapshot: { data: {} }
  } as ActivatedRoute;

  beforeEach(() => {
    matDialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);
    matDialogRefSpy.componentInstance = { title: '', message: '' };
    matDialogRefSpy.afterClosed = () => of(true);

    matDialogSpy = jasmine.createSpyObj('MatDialog', ['open']);
    matDialogSpy.open.and.returnValue(matDialogRefSpy);

    shopServiceSpy = jasmine.createSpyObj('ShopService', ['getListFeaturedPublic']);
    shopServiceSpy.getListFeaturedPublic.and.returnValue(of(TestDataPublicShops));

    statsServiceSpy = jasmine.createSpyObj('StatsService', ['get']);
    statsServiceSpy.get.and.returnValue(of(<Stats>{ Merchants: 0, Shops: 0, Products: 0, Orders: 0 }));

    TestBed.configureTestingModule({
      declarations: [PublicWebsiteComponent],
      imports: [RouterLink, RouterLinkActive, RouterOutlet],
      providers: [
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
        { provide: MatDialog, useValue: matDialogSpy },
        { provide: ShopService, useValue: shopServiceSpy },
        { provide: StatsService, useValue: statsServiceSpy }
      ]
    });
    fixture = TestBed.createComponent(PublicWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show call to action when index page is active', () => {
    let indexNav = new NavigationEnd(1, '/', '/');
    TestBed.get(Router).events.next(indexNav);
    expect(component.showCallToAction).toBeTrue();
  });

  it('should show a sign up dialog', () => {
    component.signUp();
    expect(matDialogSpy.open).toHaveBeenCalled();
    expect(matDialogRefSpy.close).toHaveBeenCalled();
  });
});