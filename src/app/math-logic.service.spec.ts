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

  it('should init state', () => { 
    expect(service.hello['add'].correct).toEqual(0);
  })

  it('should add to correct block', () => { 
    let res = service.correct1('add');
    expect(res).toEqual(1);
  })

  it('should add to incorrect block', () => { 
    expect(service.hello['subtract'].incorrect).toEqual(0);
  })

  it('should add to incorrect block', () => { 
    let res = service.incorrect1('subtract');
    expect(res).toEqual(1);
  })
});
