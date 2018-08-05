import { TestBed, inject } from '@angular/core/testing';

import { PaysService } from './pays.service';

describe('PaysService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaysService]
    });
  });

  it('should be created', inject([PaysService], (service: PaysService) => {
    expect(service).toBeTruthy();
  }));
});
