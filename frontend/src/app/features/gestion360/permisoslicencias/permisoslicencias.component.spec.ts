import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisoslicenciasComponent } from './permisoslicencias.component';

describe('PermisoslicenciasComponent', () => {
  let component: PermisoslicenciasComponent;
  let fixture: ComponentFixture<PermisoslicenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermisoslicenciasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermisoslicenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
