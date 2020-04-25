import { TestBed, async, inject } from '@angular/core/testing';

import { PagedeactivateGuard } from './pagedeactivate.guard';

describe('PagedeactivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PagedeactivateGuard]
    });
  });

  it('should ...', inject([PagedeactivateGuard], (guard: PagedeactivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
