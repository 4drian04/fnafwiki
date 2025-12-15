import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fnaf1 } from './fnaf1';

describe('Fnaf1', () => {
  let component: Fnaf1;
  let fixture: ComponentFixture<Fnaf1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fnaf1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fnaf1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
