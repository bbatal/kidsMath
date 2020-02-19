import { Component, OnInit } from '@angular/core';
import { MathLogicService } from '../math-logic.service';

@Component({
  selector: 'app-multiply',
  templateUrl: './multiply.component.html',
  styleUrls: ['./multiply.component.scss']
})
export class MultiplyComponent implements OnInit {
  numbers: number[];
  question: number;
  question2: number;
  answer: number;
  rightBox: number = 0;
  wrongBox: number = 0;

  constructor(private numGen: MathLogicService) { }

  ngOnInit(): void {
    this.question = Math.floor(Math.random() * (25));
    this.question2 = Math.floor(Math.random() * 30);
    this.answer = this.question * this.question2;

    this.numbers = [
      (Math.floor(Math.random() * 5)) * 10,
      (Math.floor(Math.random() * 20)) * 7,
      this.answer,
      (Math.floor(Math.random() * 25)) * 3
    ]
    
    this.rightBox = this.numGen.multiplyCorrectAns;
    this.wrongBox = this.numGen.multiplyWrongAns;
  }

  shuffle(array) {
    let m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }

  myFunction(event) {
    if (event.target.innerText == this.answer) {
      this.numGen.multiplyCorrectBox();
    } else {
      this.numGen.multiplyWrongBox();
    }
    this.ngOnInit();
  }

}
