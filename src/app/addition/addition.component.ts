import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.scss']
})
export class AdditionComponent implements OnInit {

  @Output() exampleNumber: number = (Math.floor(22 * Math.random()));
            exampleNumber2: number = (Math.floor(33 * Math.random()));
            exampleAnswer: number = this.exampleNumber + this.exampleNumber2;
 

  constructor() { }

  ngOnInit(): void {
  }

}
