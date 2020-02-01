import { TestBed } from '@angular/core/testing';

import { AddPlaces1Service } from './add-places-1.service';

describe('AddPlaces1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddPlaces1Service = TestBed.get(AddPlaces1Service);
    expect(service).toBeTruthy();
  });
});
