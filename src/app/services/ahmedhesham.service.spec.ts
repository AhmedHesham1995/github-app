import { TestBed } from '@angular/core/testing';

import { AhmedheshamService } from './ahmedhesham.service';

describe('AhmedheshamService', () => {
  let service: AhmedheshamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AhmedheshamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
