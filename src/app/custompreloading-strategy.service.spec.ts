import { TestBed } from '@angular/core/testing';

import { CustompreloadingStrategyService } from './custompreloading-strategy.service';

describe('CustompreloadingStrategyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustompreloadingStrategyService = TestBed.get(CustompreloadingStrategyService);
    expect(service).toBeTruthy();
  });
});
