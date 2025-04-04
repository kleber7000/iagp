import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacitacaoComponent } from './capacitacao.component';

describe('CapacitacaoComponent', () => {
  let component: CapacitacaoComponent;
  let fixture: ComponentFixture<CapacitacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapacitacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapacitacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
