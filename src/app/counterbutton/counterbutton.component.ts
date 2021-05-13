import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { reset } from '../state/counter.actions';
import { decrement } from '../state/counter.actions';
import { increment } from '../state/counter.actions';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counterbutton',
  templateUrl: './counterbutton.component.html',
  styleUrls: ['./counterbutton.component.css']
})
export class CounterbuttonComponent implements OnInit {
  // @Output() inc = new EventEmitter<void>();
  // @Output() dec = new EventEmitter<void>();
  // @Output() reset = new EventEmitter<void>();

  constructor( private store: Store<AppState>) {}
  // constructor(private store: Store<{ counter: { counter: number } }>) {}

  ngOnInit() {}

  onInc() {
    // this.inc.emit();
    this.store.dispatch(increment());
  }
  onDec() {
    // this.dec.emit();
    this.store.dispatch(decrement());
  }

  onReset() {
    // this.reset.emit();
    this.store.dispatch(reset());
  }
}
