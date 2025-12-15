import { TestBed } from '@angular/core/testing';

import { Fnaf3Service } from './fnaf3-service';

describe('Fnaf3Service', () => {
  let service: Fnaf3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Fnaf3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
