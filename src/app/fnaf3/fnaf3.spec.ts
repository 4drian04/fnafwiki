import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fnaf3 } from './fnaf3';

describe('Fnaf3', () => {
  let component: Fnaf3;
  let fixture: ComponentFixture<Fnaf3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fnaf3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fnaf3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
