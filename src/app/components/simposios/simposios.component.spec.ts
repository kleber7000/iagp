import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimposiosComponent } from './simposios.component';

describe('SimposiosComponent', () => {
  let component: SimposiosComponent;
  let fixture: ComponentFixture<SimposiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimposiosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimposiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
