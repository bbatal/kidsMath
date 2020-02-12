import { TestBed } from '@angular/core/testing';

import { MathLogicService } from './math-logic.service';

describe('MathLogicService', () => {
  let service: MathLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
