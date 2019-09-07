import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGrupoComponent } from './modal-grupo.component';

describe('ModalGrupoComponent', () => {
  let component: ModalGrupoComponent;
  let fixture: ComponentFixture<ModalGrupoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalGrupoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
