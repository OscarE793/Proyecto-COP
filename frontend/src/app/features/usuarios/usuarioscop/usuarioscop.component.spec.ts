import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioscopComponent } from './usuarioscop.component';

describe('UsuarioscopComponent', () => {
  let component: UsuarioscopComponent;
  let fixture: ComponentFixture<UsuarioscopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuarioscopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioscopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
