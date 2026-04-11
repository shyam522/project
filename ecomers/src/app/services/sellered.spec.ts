import { TestBed } from '@angular/core/testing';

import { Sellered } from './sellered';

describe('Sellered', () => {
  let service: Sellered;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sellered);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
