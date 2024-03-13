import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Constants } from 'src/app/shared/Constants';
import { Environment } from 'src/app/shared/environments/Environment';
import { GetShopsParameters } from '../models/parameters/GetShopsParameters.model';
import { ShopService } from './Shop.service';
import { TestBed } from '@angular/core/testing';
import { TestDataCountries } from 'src/assets/test-data/Countries';
import { TestDataShopCategories } from 'src/assets/test-data/ShopCategories';
import { TestDataShops } from 'src/assets/test-data/Shops';

describe('ShopService', () => {
    let service: ShopService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
            imports: [HttpClientTestingModule],
            providers: [ShopService]
        });
        service = TestBed.inject(ShopService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should be able to get a list of shops', () => {
        const parameters: GetShopsParameters = {
            Name: 'Test',
            SubDomain: 'Test',
            CountryId: TestDataCountries[0].Id,
            ShopCategoryId: TestDataShopCategories[0].Id
        };

        service.getList(parameters).subscribe();
        const request = httpMock.expectOne(`${Environment.API_URL}/Shop?name=${parameters.Name}&subdomain=${parameters.SubDomain}&countryId=${parameters.CountryId}&categoryId=${parameters.ShopCategoryId}`);
        expect(request.request.method).toBe('GET');
    });

    it('should be able to get a list of public shops', () => {
        const parameters: GetShopsParameters = {
            Name: 'Test',
            SubDomain: 'Test',
            CountryId: TestDataCountries[0].Id,
            ShopCategoryId: TestDataShopCategories[0].Id
        };

        service.getListPublic(parameters).subscribe();
        const request = httpMock.expectOne(`${Environment.API_URL}/Shop/public?name=${parameters.Name}&subdomain=${parameters.SubDomain}&countryId=${parameters.CountryId}&categoryId=${parameters.ShopCategoryId}`);
        expect(request.request.method).toBe('GET');
    });

    it('should be able to get a list of public shops', () => {
        service.getListFeaturedPublic().subscribe();
        const request = httpMock.expectOne(`${Environment.API_URL}/Shop/public/featured`);
        expect(request.request.method).toBe('GET');
    });

    it('should be able to get a list of shops', () => {
        service.getList().subscribe();
        const request = httpMock.expectOne(Environment.API_URL + '/Shop');
        expect(request.request.method).toBe('GET');
    });

    it('should be able to get a single shop', () => {
        service.getById(Constants.EMPTY_GUID).subscribe();
        const request = httpMock.expectOne(Environment.API_URL + '/Shop/' + Constants.EMPTY_GUID);
        expect(request.request.method).toBe('GET');
    });

    it('should be able to create a shop', () => {
        service.create(TestDataShops[0]).subscribe();
        const request = httpMock.expectOne(Environment.API_URL + '/Shop');
        expect(request.request.method).toBe('POST');
    });

    it('should be able to update a shop', () => {
        service.update(TestDataShops[0]).subscribe();
        const request = httpMock.expectOne(Environment.API_URL + '/Shop/' + TestDataShops[0].Id);
        expect(request.request.method).toBe('PUT');
    });

    it('should be able to delete a shop', () => {
        service.delete(TestDataShops[0].Id).subscribe();
        const request = httpMock.expectOne(Environment.API_URL + '/Shop/' + TestDataShops[0].Id);
        expect(request.request.method).toBe('DELETE');
    });

    it('should be able to check if a subdomain is available', () => {
        service.subdomainAvailable('www', Constants.EMPTY_GUID).subscribe();
        const request = httpMock.expectOne(`${Environment.API_URL}/Shop/public/subdomain-available?subdomain=www&id=${Constants.EMPTY_GUID}`);
        expect(request.request.method).toBe('GET');
    });
});