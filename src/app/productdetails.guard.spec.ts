import { TestBed, async, inject } from '@angular/core/testing';

import { ProductdetailsGuard } from './productdetails.guard';

describe('ProductdetailsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductdetailsGuard]
    });
  });

  it('should ...', inject([ProductdetailsGuard], (guard: ProductdetailsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
