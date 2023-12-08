import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Constants } from '../Constants';
import { CustomerService } from './Customer.service';
import { Environment } from 'src/app/shared/environments/Environment';
import { GetCustomersParameters } from '../models/parameters/GetCustomersParameters.model';
import { MutateCustomerRequest } from '../models/request/MutateCustomerRequest.model';
import { TestBed } from '@angular/core/testing';
import { TestDataCountries } from 'src/assets/test-data/Countries';
import { TestDataCustomers } from 'src/assets/test-data/Customers';

describe('CustomerService', () => {
    let service: CustomerService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
            imports: [HttpClientTestingModule],
            providers: [CustomerService]
        });
        service = TestBed.inject(CustomerService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should be able to get a list of customers', () => {
        const parameters: GetCustomersParameters = {
            ShopId: TestDataCustomers[0].ShopId,
            Username: 'Test',
            EmailAddress: 'Test',
            FirstName: 'Test',
            LastName: 'Test'
        };

        service.getList(parameters).subscribe();
        const request = httpMock.expectOne(`${Environment.API_URL}/Customer?shopId=${parameters.ShopId}&username=${parameters.Username}&emailAddress=${parameters.EmailAddress}&firstName=${parameters.FirstName}&lastName=${parameters.LastName}`);
        expect(request.request.method).toBe('GET');
    });

    it('should be able to get a single customer', () => {
        service.getById(Constants.EMPTY_GUID).subscribe();
        const request = httpMock.expectOne(`${Environment.API_URL}/Customer/${Constants.EMPTY_GUID}`);
        expect(request.request.method).toBe('GET');
    });

    it('should be able to get a public customer by ID', () => {
        service.getByIdPublic(Constants.EMPTY_GUID).subscribe();
        const request = httpMock.expectOne(`${Environment.API_URL}/Customer/public/${Constants.EMPTY_GUID}`);
        expect(request.request.method).toBe('GET');
    });

    it('should be able to get a customer by ID and password', () => {
        service.getByIdAndPassword(Constants.EMPTY_GUID, 'password').subscribe();
        const request = httpMock.expectOne(`${Environment.API_URL}/Customer/${Constants.EMPTY_GUID}/password`);
        expect(request.request.method).toBe('GET');
    });

    it('should be able to create a customer', () => {
        const mutateCustomerRequest: MutateCustomerRequest = {
            Customer: TestDataCustomers[0],
            AddressLine1: 'Sesame Street 123',
            AddressLine2: 'Block ABC',
            PostalCode: '12345 AB',
            City: 'Manhattan',
            Province: 'New York',
            Country: TestDataCountries[0]
        };
        service.create(mutateCustomerRequest).subscribe();
        const request = httpMock.expectOne(`${Environment.API_URL}/Customer`);
        expect(request.request.method).toBe('POST');
    });

    it('should be able to update a customer', () => {
        const mutateCustomerRequest: MutateCustomerRequest = {
            Customer: TestDataCustomers[0],
            AddressLine1: 'Sesame Street 123',
            AddressLine2: 'Block ABC',
            PostalCode: '12345 AB',
            City: 'Manhattan',
            Province: 'New York',
            Country: TestDataCountries[0]
        };
        service.update(mutateCustomerRequest).subscribe();
        const request = httpMock.expectOne(`${Environment.API_URL}/Customer/${TestDataCustomers[0].Id}`);
        expect(request.request.method).toBe('PUT');
    });

    it('should be able to activate a customer\'s account', () => {
        service.activateAccount(TestDataCustomers[0].Id!, 'PASSWORD', 'NEWPASSWORD').subscribe();
        const request = httpMock.expectOne(`${Environment.API_URL}/Customer/activate-account`);
        expect(request.request.method).toBe('PUT');
    });

    it('should be able to change a customer\'s password', () => {
        service.changePassword('PASSWORD', 'NEWPASSWORD').subscribe();
        const request = httpMock.expectOne(`${Environment.API_URL}/Customer/change-password`);
        expect(request.request.method).toBe('PUT');
    });

    it('should be able to reset a customer\'s account', () => {
        service.forgotPassword(TestDataCustomers[0].EmailAddress).subscribe();
        const request = httpMock.expectOne(`${Environment.API_URL}/Customer/public/forgot-password`);
        expect(request.request.method).toBe('POST');
    });

    it('should be able to delete a product', () => {
        service.delete(TestDataCustomers[0].Id).subscribe();
        const request = httpMock.expectOne(`${Environment.API_URL}/Customer/${TestDataCustomers[0].Id}`);
        expect(request.request.method).toBe('DELETE');
    });
});