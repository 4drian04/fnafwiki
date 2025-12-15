import { TestBed } from '@angular/core/testing';

import { Fnaf1Service } from './fnaf1-service';

describe('Fnaf1Service', () => {
  let service: Fnaf1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Fnaf1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
