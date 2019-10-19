import { TestBed } from '@angular/core/testing';

import { DriverServices } from './driver.service';

describe('DriverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DriverServices = TestBed.get(DriverServices);
    expect(service).toBeTruthy();
  });
});
