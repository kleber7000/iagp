import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosPresenciaisComponent } from './cursos-presenciais.component';

describe('CursosPresenciaisComponent', () => {
  let component: CursosPresenciaisComponent;
  let fixture: ComponentFixture<CursosPresenciaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursosPresenciaisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosPresenciaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
