import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AuthenticationService } from './Authentication.service';
import { Environment } from 'src/app/shared/environments/Environment';
import { TestBed } from '@angular/core/testing';

describe('AuthenticationService', () => {
    let service: AuthenticationService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
            imports: [HttpClientTestingModule],
            providers: [AuthenticationService]
        });
        service = TestBed.inject(AuthenticationService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should be able to log in', () => {
        service.login('merchant@dgbcommerce.com', '********').subscribe();
        const request = httpMock.expectOne(Environment.API_URL + '/Merchant/Authenticate');
        expect(request.request.method).toBe('POST');
    });

    it('should be able to log out', () => {
        service.logout();
        expect(service.authenticatedMerchant).toBe(null);
    });
});