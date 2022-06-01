import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss']
})
export class ChallengesComponent implements OnInit {

  currentChallenge = 0;

  firstChallenge = 0;
  lastChallenge = 6;
  

  get isFirstChallenge(): boolean {
    return this.currentChallenge === this.firstChallenge;
  }

  get isLastChallenge(): boolean {
    return this.currentChallenge === this.lastChallenge;
  }

  constructor() { }

  ngOnInit(): void {
  }

  back(): void {
    this.currentChallenge--;
  }

  next(): void {
    this.currentChallenge++;

  }

}
