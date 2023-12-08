import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Constants } from 'src/app/shared/Constants';
import { CurrencyService } from './Currency.service';
import { Environment } from 'src/app/shared/environments/Environment';
import { TestBed } from '@angular/core/testing';

describe('CurrencyService', () => {
    let service: CurrencyService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
            imports: [HttpClientTestingModule],
            providers: [CurrencyService]
        });
        service = TestBed.inject(CurrencyService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should be able to get a list of currencies', () => {
        service.getList().subscribe();
        const request = httpMock.expectOne(Environment.API_URL + '/Currency');
        expect(request.request.method).toBe('GET');
    });

    it('should be able to get a single currency', () => {
        service.getById(Constants.EMPTY_GUID).subscribe();
        const request = httpMock.expectOne(Environment.API_URL + '/Currency/' + Constants.EMPTY_GUID);
        expect(request.request.method).toBe('GET');
    });
});