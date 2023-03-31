import { TestBed } from '@angular/core/testing';

import { CampeonatoService } from './campeonato.service';

describe('CampeonatoService', () => {
  let service: CampeonatoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampeonatoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
