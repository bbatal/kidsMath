import { Component, OnInit } from '@angular/core';
import { MathLogicService } from '../math-logic.service';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.scss']
})
export class ComparisonComponent implements OnInit {
  symbols: string[];
  question: number;
  question2: number;
  answer: string;
  rightBox: number = 0;
  wrongBox: number = 0;
  faCheck = faCheck;
  faTimes = faTimes;


  constructor(private numGen: MathLogicService) { }

  ngOnInit(): void {
    this.question = Math.floor(Math.random() * (25));
    this.question2 = Math.floor(Math.random() * 30);
    if (this.question < this.question2) {
      this.answer = "<";
    } else if (this.question > this.question2) {
      this.answer = ">";
    } else if (this.question === this.question2) {
      this.answer = "="
    } else {
      this.answer = "none";
    }

    this.symbols = [
      "<",
      ">",
      "=",
      "none"
    ]
    
    this.rightBox = this.numGen.comparisonCorrectAns;
    this.wrongBox = this.numGen.comparisonWrongAns;
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
      this.numGen.comparisonCorrectBox();
    } else {
      this.numGen.comparisonWrongBox();
    }
    this.ngOnInit();
  }

}
