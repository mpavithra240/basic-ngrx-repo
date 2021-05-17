import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

import { CounterbuttonComponent } from './counterbutton/counterbutton.component';
import { CounteroutputComponent } from './counteroutput/counteroutput.component';
import { CustomInputComponent } from './custom-input/custom-input.component';



const routes: Routes = [{ path: '', component: CounterComponent  }];

@NgModule({
  declarations: [
    CounterComponent,
    
    CounterbuttonComponent,
    CounteroutputComponent,
    CustomInputComponent
 
  ],
  imports: [
    CommonModule,
    FormsModule,
    FormsModule  , 
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: []
})
export class CounterModule {}
