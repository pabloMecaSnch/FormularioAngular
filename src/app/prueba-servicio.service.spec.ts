import { TestBed } from '@angular/core/testing';

import { PruebaServicioService } from './prueba-servicio.service';

describe('PruebaServicioService', () => {
  let service: PruebaServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PruebaServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
