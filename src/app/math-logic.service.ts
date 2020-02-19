import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathLogicService {
addCorrectAns: number = 0;
addWrongAns: number = 0;

subtractCorrectAns: number = 0;
subtractWrongAns: number = 0;

comparisonCorrectAns: number = 0;
comparisonWrongAns: number = 0;

multiplyCorrectAns: number = 0;
multiplyWrongAns: number = 0;


  constructor() { }


  addCorrectBox() {
    return this.addCorrectAns +=1;
  }
  addWrongBox() {
    return this.addWrongAns +=1;
  }

  subtractCorrectBox() {
    return this.subtractCorrectAns +=1;
  }
  subtractWrongBox() {
    return this.subtractWrongAns +=1;
  }

  comparisonCorrectBox() {
    return this.comparisonCorrectAns +=1;
  }
  comparisonWrongBox() {
    return this.comparisonWrongAns +=1;
  }

  multiplyCorrectBox() {
    return this.multiplyCorrectAns +=1;
  }
  multiplyWrongBox() {
    return this.multiplyWrongAns +=1;
  }

}

