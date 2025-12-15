import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAnimatronico } from './detalle-animatronico';

describe('DetalleAnimatronico', () => {
  let component: DetalleAnimatronico;
  let fixture: ComponentFixture<DetalleAnimatronico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleAnimatronico]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleAnimatronico);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
