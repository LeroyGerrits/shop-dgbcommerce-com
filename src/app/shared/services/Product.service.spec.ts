import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Constants } from 'src/app/shared/Constants';
import { Environment } from 'src/app/shared/environments/Environment';
import { GetProductsParameters } from '../models/parameters/GetProductsParameters.model';
import { ProductService } from './Product.service';
import { TestBed } from '@angular/core/testing';
import { TestDataProducts } from 'src/assets/test-data/Products';

describe('ProductService', () => {
    let service: ProductService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
            imports: [HttpClientTestingModule],
            providers: [ProductService]
        });
        service = TestBed.inject(ProductService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should be able to get a list of products', () => {
        const parameters: GetProductsParameters = {
            Name: 'Test',
            ShopId: TestDataProducts[0].ShopId,
            Visible: true,
            ShowOnHome: true
        };

        service.getList(parameters).subscribe();
        const request = httpMock.expectOne(`${Environment.API_URL}/Product?name=${parameters.Name}&shopId=${parameters.ShopId}&categoryId=${parameters.CategoryId}&visible=${parameters.Visible}&showOnHome=${parameters.ShowOnHome}`);
        expect(request.request.method).toBe('GET');
    });

    it('should be able to get a single product', () => {
        service.getById(Constants.EMPTY_GUID).subscribe();
        const request = httpMock.expectOne(`${Environment.API_URL}/Product/${Constants.EMPTY_GUID}`);
        expect(request.request.method).toBe('GET');
    });
});