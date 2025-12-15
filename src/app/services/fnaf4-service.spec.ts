import { TestBed } from '@angular/core/testing';

import { Fnaf4Service } from './fnaf4-service';

describe('Fnaf4Service', () => {
  let service: Fnaf4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Fnaf4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
