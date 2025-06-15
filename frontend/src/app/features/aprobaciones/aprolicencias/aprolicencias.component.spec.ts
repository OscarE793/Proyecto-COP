import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprolicenciasComponent } from './aprolicencias.component';

describe('AprolicenciasComponent', () => {
  let component: AprolicenciasComponent;
  let fixture: ComponentFixture<AprolicenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AprolicenciasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AprolicenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
