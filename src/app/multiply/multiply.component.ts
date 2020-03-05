import { Component, OnInit } from '@angular/core';
import { MathLogicService } from '../math-logic.service';
import { faCheck, faTimes, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { shuffle } from '../shared-logic';

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
  faCheck = faCheck;
  faTimes = faTimes;
  faArrowLeft = faArrowLeft;
  shuffle = shuffle;

  constructor(private numGen: MathLogicService) { }

  ngOnInit(): void {
    this.question = Math.floor(Math.random() * 6);
    this.question2 = Math.floor(Math.random() * 9);
    this.answer = this.question * this.question2;

    this.numbers = [
      (Math.floor(Math.random() * 5)),
      (Math.floor(Math.random() * 20)),
      this.answer,
      (Math.floor(Math.random() * 32))
    ]
    
    this.rightBox = this.numGen.multiplyCorrectAns;
    this.wrongBox = this.numGen.multiplyWrongAns;
  }


  myFunction(event) {
    const question3 = document.getElementById('mainQuestion');
    if (event.target.innerText == this.answer) {
      this.numGen.multiplyCorrectBox();
    } else {
      this.numGen.multiplyWrongBox();
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
