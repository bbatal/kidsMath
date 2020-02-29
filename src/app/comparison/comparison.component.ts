import { Component, OnInit } from '@angular/core';
import { MathLogicService } from '../math-logic.service';
import { faCheck, faTimes, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { shuffle } from '../shared-logic';

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
  faArrowLeft = faArrowLeft;
  shuffle = shuffle;

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

  myFunction(event) {
    const question3 = document.getElementById('mainQuestion');
    if (event.target.innerText == this.answer) {
      this.numGen.comparisonCorrectBox();
    } else {
      this.numGen.comparisonWrongBox();
    }
    this.ngOnInit();
    question3.focus();
  }

  accessLink(event) {
    if (event.code == "Enter") {
      if (event.target.id == "answer") {
        this.myFunction(event);
      }
    };
    return false;
}

}
