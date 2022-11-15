import { TestBed } from '@angular/core/testing';

import { SERVICIOService } from './servicio.service';

describe('SERVICIOService', () => {
  let service: SERVICIOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SERVICIOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
