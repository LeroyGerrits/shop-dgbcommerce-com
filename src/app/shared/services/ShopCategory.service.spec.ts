import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Constants } from 'src/app/shared/Constants';
import { Environment } from 'src/app/shared/environments/Environment';
import { ShopCategoryService } from './ShopCategory.service';
import { TestBed } from '@angular/core/testing';

describe('ShopCategoryService', () => {
    let service: ShopCategoryService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
            imports: [HttpClientTestingModule],
            providers: [ShopCategoryService]
        });
        service = TestBed.inject(ShopCategoryService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should be able to get a list of shop categories', () => {
        service.getList().subscribe();
        const request = httpMock.expectOne(Environment.API_URL + '/ShopCategory');
        expect(request.request.method).toBe('GET');
    });

    it('should be able to get a single shop category', () => {
        service.getById(Constants.EMPTY_GUID).subscribe();
        const request = httpMock.expectOne(Environment.API_URL + '/ShopCategory/' + Constants.EMPTY_GUID);
        expect(request.request.method).toBe('GET');
    });
});