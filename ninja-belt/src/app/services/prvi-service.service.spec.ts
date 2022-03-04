import { TestBed } from '@angular/core/testing';

import { PrviServiceService } from './prvi-service.service';

describe('PrviServiceService', () => {
  let service: PrviServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrviServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
