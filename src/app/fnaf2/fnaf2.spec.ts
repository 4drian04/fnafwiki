import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fnaf2 } from './fnaf2';

describe('Fnaf2', () => {
  let component: Fnaf2;
  let fixture: ComponentFixture<Fnaf2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fnaf2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fnaf2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
