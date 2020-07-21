import { TestBed } from '@angular/core/testing';

import { LatestContactsService } from './latest-contacts.service';

describe('LatestContactsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LatestContactsService = TestBed.get(LatestContactsService);
    expect(service).toBeTruthy();
  });
});
