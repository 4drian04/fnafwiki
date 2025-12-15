import { TestBed } from '@angular/core/testing';

import { Fnaf2Service } from './fnaf2-service';

describe('Fnaf2Service', () => {
  let service: Fnaf2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Fnaf2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
