import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Environment } from 'src/app/shared/environments/Environment';
import { PageService } from './Page.service';
import { TestBed } from '@angular/core/testing';
import { TestDataShops } from 'src/assets/test-data/Shops';

describe('PageService', () => {
    let service: PageService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
            imports: [HttpClientTestingModule],
            providers: [PageService]
        });
        service = TestBed.inject(PageService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should be able to get a list of pages by shop ID', () => {
        service.getByShopIdPublic(TestDataShops[0].Id).subscribe();
        const request = httpMock.expectOne(`${Environment.API_URL}/Page/public/GetByShopId/${TestDataShops[0].Id}`);
        expect(request.request.method).toBe('GET');
    });
});