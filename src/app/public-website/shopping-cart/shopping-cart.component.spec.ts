import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRoute } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrencyService } from 'src/app/shared/services/Currency.service';
import { DatePipe } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { PublicWebsiteShoppingCartComponent } from './shopping-cart.component';
import { QRCodeModule } from 'angularx-qrcode';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { TestDataCurrencies } from 'src/assets/test-data/Currencies';
import { of } from 'rxjs';

describe('PublicWebsiteShoppingCartComponent', () => {
  let component: PublicWebsiteShoppingCartComponent;
  let fixture: ComponentFixture<PublicWebsiteShoppingCartComponent>;

  const fakeActivatedRoute = {
    snapshot: { data: {} }
  } as ActivatedRoute;

  let currencyServiceSpy: jasmine.SpyObj<CurrencyService>;

  beforeEach(() => {
    currencyServiceSpy = jasmine.createSpyObj('CurrencyService', ['getList']);
    currencyServiceSpy.getList.and.returnValue(of(TestDataCurrencies));

    TestBed.configureTestingModule({
      declarations: [PublicWebsiteShoppingCartComponent],
      imports: [BrowserAnimationsModule, HttpClientTestingModule, MatDatepickerModule, MatInputModule, MatNativeDateModule, MatPaginatorModule, MatSelectModule, MatTableModule, QRCodeModule, ReactiveFormsModule, RouterTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
        { provide: CurrencyService, useValue: currencyServiceSpy },
        PublicWebsiteShoppingCartComponent,
        DatePipe
      ]
    });
    fixture = TestBed.createComponent(PublicWebsiteShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});