import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  // counter = 0;
  constructor() {}

  ngOnInit() {
    console.log('hi')
  }

  // onInc() {
  //   this.counter++;
  // }
  // onDec() {
  //   this.counter--;
  // }

  // onReset() {
  //   this.counter = 0;
  // }
}
