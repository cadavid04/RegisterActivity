import { TestBed } from '@angular/core/testing';

import { RegistroActividadService } from './registroActividad.service';

describe('RegistrarActividadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistroActividadService = TestBed.get(RegistroActividadService);
    expect(service).toBeTruthy();
  });
});
