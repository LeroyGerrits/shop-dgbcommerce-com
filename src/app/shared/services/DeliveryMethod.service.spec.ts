import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Constants } from 'src/app/shared/Constants';
import { DeliveryMethodService } from './DeliveryMethod.service';
import { Environment } from 'src/app/shared/environments/Environment';
import { GetDeliveryMethodsParameters } from '../models/parameters/GetDeliveryMethodsParameters.model';
import { TestBed } from '@angular/core/testing';
import { TestDataDeliveryMethods } from 'src/assets/test-data/DeliveryMethods';

describe('DeliveryMethodService', () => {
    let service: DeliveryMethodService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
            imports: [HttpClientTestingModule],
            providers: [DeliveryMethodService]
        });
        service = TestBed.inject(DeliveryMethodService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should be able to get a list of delivery methods', () => {
        const parameters: GetDeliveryMethodsParameters = {
            Name: 'Test',
            ShopId: TestDataDeliveryMethods[0].Shop.Id
        };

        service.getList(parameters).subscribe();
        const request = httpMock.expectOne(`${Environment.API_URL}/DeliveryMethod?name=${parameters.Name}&shopId=${parameters.ShopId}`);
        expect(request.request.method).toBe('GET');
    });

    it('should be able to get a single delivery method', () => {
        service.getById(Constants.EMPTY_GUID).subscribe();
        const request = httpMock.expectOne(`${Environment.API_URL}/DeliveryMethod/${Constants.EMPTY_GUID}`);
        expect(request.request.method).toBe('GET');
    });

    it('should be able to create a delivery method', () => {
        service.create(TestDataDeliveryMethods[0]).subscribe();
        const request = httpMock.expectOne(`${Environment.API_URL}/DeliveryMethod`);
        expect(request.request.method).toBe('POST');
    });

    it('should be able to update a delivery method', () => {
        service.update(TestDataDeliveryMethods[0]).subscribe();
        const request = httpMock.expectOne(`${Environment.API_URL}/DeliveryMethod/${TestDataDeliveryMethods[0].Id}`);
        expect(request.request.method).toBe('PUT');
    });

    it('should be able to delete a delivery method', () => {
        service.delete(TestDataDeliveryMethods[0].Id).subscribe();
        const request = httpMock.expectOne(`${Environment.API_URL}/DeliveryMethod/${TestDataDeliveryMethods[0].Id}`);
        expect(request.request.method).toBe('DELETE');
    });
});