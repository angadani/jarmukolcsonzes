import { TestBed, inject } from '@angular/core/testing';

import { RentalListService } from './rental-list.service';

describe('RentalListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RentalListService]
    });
  });

  it('should be created', inject([RentalListService], (service: RentalListService) => {
    expect(service).toBeTruthy();
  }));
});
