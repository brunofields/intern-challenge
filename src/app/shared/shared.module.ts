import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from './stepper/stepper.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StepperComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [StepperComponent]
})
export class SharedModule { }
