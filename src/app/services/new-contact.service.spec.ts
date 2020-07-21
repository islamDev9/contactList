import { TestBed } from '@angular/core/testing';

import { NewContactService } from './new-contact.service';

describe('NewContactService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewContactService = TestBed.get(NewContactService);
    expect(service).toBeTruthy();
  });
});
