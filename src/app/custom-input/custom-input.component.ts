import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { customIncrement, changeNAme } from '../state/counter.actions';
import { getName } from '../state/counter.selector';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css']
})
export class CustomInputComponent implements OnInit {
  value: number;
  name: string;
  name$: Observable<string>;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select(getName).subscribe(data => {
      //using
      console.log('lo111g');
      this.name = data;
    });

    this.name$ = this.store.select(getName);
    //  this.store.select('counter').subscribe(data => { //not feasible watch video 9
    //   console.log('lo111g')
    //   this.name = data.text;
    // });
  }

  onAdd() {
    this.store.dispatch(customIncrement({ value: +this.value }));

    console.log(this.value);
  }

  changeName() {
    this.store.dispatch(changeNAme({ text: this.name }));
  }
}
