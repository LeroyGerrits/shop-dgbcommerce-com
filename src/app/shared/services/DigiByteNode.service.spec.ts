import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Constants } from 'src/app/shared/Constants';
import { DigiByteNodeService } from './DigiByteNode.service';
import { Environment } from 'src/app/shared/environments/Environment';
import { TestBed } from '@angular/core/testing';

describe('DigiByteNodeService', () => {
    let service: DigiByteNodeService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
            imports: [HttpClientTestingModule],
            providers: [DigiByteNodeService]
        });
        service = TestBed.inject(DigiByteNodeService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should be able to get blockcount', () => {
        service.getBlockCount().subscribe();
        const request = httpMock.expectOne(Environment.API_URL + '/DigiByteNode/getblockcount');
        expect(request.request.method).toBe('GET');
    });

    it('should be able to get difficulty', () => {
        service.getDifficulty().subscribe();
        const request = httpMock.expectOne(Environment.API_URL + '/DigiByteNode/getdifficulty');
        expect(request.request.method).toBe('GET');
    });

    it('should be able to get IP addresses', () => {
        service.getIpAddresses().subscribe();
        const request = httpMock.expectOne(Environment.API_URL + '/DigiByteNode/getipaddresses');
        expect(request.request.method).toBe('GET');
    });

    it('should be able to get mining info', () => {
        service.getMiningInfo().subscribe();
        const request = httpMock.expectOne(Environment.API_URL + '/DigiByteNode/getmininginfo');
        expect(request.request.method).toBe('GET');
    });
});