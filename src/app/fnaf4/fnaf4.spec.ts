import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fnaf4 } from './fnaf4';

describe('Fnaf4', () => {
  let component: Fnaf4;
  let fixture: ComponentFixture<Fnaf4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fnaf4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fnaf4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
