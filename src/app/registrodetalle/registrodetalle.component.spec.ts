import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrodetalleComponent } from './registrodetalle.component';

describe('RegistrodetalleComponent', () => {
  let component: RegistrodetalleComponent;
  let fixture: ComponentFixture<RegistrodetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrodetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrodetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
