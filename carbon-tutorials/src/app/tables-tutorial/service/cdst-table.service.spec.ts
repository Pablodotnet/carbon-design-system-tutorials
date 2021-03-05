import { TestBed } from '@angular/core/testing';

import { CdstTableService } from './cdst-table.service';

describe('CdstTableService', () => {
  let service: CdstTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CdstTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
