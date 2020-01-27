import { TestBed, async, inject } from '@angular/core/testing';

import { PagesGuard } from './pages.guard';

describe('PagesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PagesGuard]
    });
  });

  it('should ...', inject([PagesGuard], (guard: PagesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
