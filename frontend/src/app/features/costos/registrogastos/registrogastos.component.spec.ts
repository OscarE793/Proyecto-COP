import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrogastosComponent } from './registrogastos.component';

describe('RegistrogastosComponent', () => {
  let component: RegistrogastosComponent;
  let fixture: ComponentFixture<RegistrogastosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrogastosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrogastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
