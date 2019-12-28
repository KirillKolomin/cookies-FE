import { TestBed } from '@angular/core/testing';

import { HttpCookieClientService } from './http-cookie-client.service';

describe('HttpCookieClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpCookieClientService = TestBed.get(HttpCookieClientService);
    expect(service).toBeTruthy();
  });
});
