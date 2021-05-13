import { Component, Input, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from '../app.state';
import { getCounter } from '../state/counter.selector';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counteroutput',
  templateUrl: './counteroutput.component.html',
  styleUrls: ['./counteroutput.component.css']
})
export class CounteroutputComponent implements OnInit {
  //@Input() counter; //used in platformBrowserDynamic
  counter: number;
  counterSub: Subscription;
  counter$: Observable<number>;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.counterSub = this.store.select(getCounter).subscribe(data => {
      console.log('coun');
      this.counter = data;
    });

    // this.counterSub = this.store.select('counter').subscribe(data => { // not feasible
    //   console.log('coun');
    //   this.counter = data.counter;
    // });
    
    // this.counter$ = this.store.select('counter'); // not feasible
    this.counter$ = this.store.select(getCounter)
    // console.log(this.counter$.pipe );
  }

  ngOnDestory() {
    if (this.counterSub) {
      this.counterSub.unsubscribe();
    }
  }
}
