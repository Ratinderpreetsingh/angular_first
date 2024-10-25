import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { exceutiveGuard } from './exceutive.guard';

describe('exceutiveGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => exceutiveGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
