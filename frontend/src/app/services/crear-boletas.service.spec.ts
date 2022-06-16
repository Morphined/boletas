import { TestBed } from '@angular/core/testing';

import { CrearBoletasService } from './crear-boletas.service';

describe('CrearBoletasService', () => {
  let service: CrearBoletasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearBoletasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
