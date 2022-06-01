import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-second-challenge',
  templateUrl: './second-challenge.component.html',
  styleUrls: ['./second-challenge.component.scss']
})
export class SecondChallengeComponent implements OnInit {

  challengeResult!: string;

  secondChallengeForm = new FormGroup({
    firstString: new FormControl('', Validators.required),
    secondString: new FormControl('', Validators.required),
  });

  get isFormValid(): boolean {
    return this.secondChallengeForm.valid;
  }

  constructor() { }

  ngOnInit(): void {
  }

  submit() {}

}
