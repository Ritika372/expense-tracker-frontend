import { TestBed } from '@angular/core/testing';

import { OauthLoginService } from './oauth-login.service';

describe('OauthLoginService', () => {
  let service: OauthLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OauthLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
