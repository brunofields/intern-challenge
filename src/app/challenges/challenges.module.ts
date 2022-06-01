import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChallengesRoutingModule } from './challenges-routing.module';
import { ChallengesComponent } from './challenges.component';
import { FirstChallengeComponent } from './first-challenge/first-challenge.component';
import { SecondChallengeComponent } from './second-challenge/second-challenge.component';
import { ThirdChallengeComponent } from './third-challenge/third-challenge.component';
import { FourthChallengeComponent } from './fourth-challenge/fourth-challenge.component';
import { FifthChallengeComponent } from './fifth-challenge/fifth-challenge.component';
import { SixthChallengeComponent } from './sixth-challenge/sixth-challenge.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ChallengesComponent,
    FirstChallengeComponent,
    SecondChallengeComponent,
    ThirdChallengeComponent,
    FourthChallengeComponent,
    FifthChallengeComponent,
    SixthChallengeComponent
  ],
  imports: [
    CommonModule,
    ChallengesRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ChallengesModule { }
