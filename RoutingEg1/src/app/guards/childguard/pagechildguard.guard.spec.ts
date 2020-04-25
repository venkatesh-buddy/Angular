import { TestBed, async, inject } from '@angular/core/testing';

import { PagechildguardGuard } from './pagechildguard.guard';

describe('PagechildguardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PagechildguardGuard]
    });
  });

  it('should ...', inject([PagechildguardGuard], (guard: PagechildguardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
