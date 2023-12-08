import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Environment } from 'src/app/shared/environments/Environment';
import { GetProductPhotosParameters } from '../models/parameters/GetProductPhotosParameters.model';
import { ProductPhotoService } from './ProductPhoto.service';
import { TestBed } from '@angular/core/testing';
import { TestDataProductPhotos } from 'src/assets/test-data/ProductPhotos';

describe('ProductPhotoService', () => {
    let service: ProductPhotoService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
            imports: [HttpClientTestingModule],
            providers: [ProductPhotoService]
        });
        service = TestBed.inject(ProductPhotoService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should be able to get a list of product photos', () => {
        const parameters: GetProductPhotosParameters = {
            ProductId: TestDataProductPhotos[0].ProductId
        };

        service.getList(parameters).subscribe();
        const request = httpMock.expectOne(`${Environment.API_URL}/ProductPhoto?productId=${parameters.ProductId}`);
        expect(request.request.method).toBe('GET');
    });
});