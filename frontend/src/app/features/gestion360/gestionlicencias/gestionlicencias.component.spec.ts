import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionlicenciasComponent } from './gestionlicencias.component';

describe('GestionlicenciasComponent', () => {
  let component: GestionlicenciasComponent;
  let fixture: ComponentFixture<GestionlicenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionlicenciasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionlicenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
