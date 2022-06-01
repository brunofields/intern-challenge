import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthChallengeComponent } from './fourth-challenge.component';

describe('FourthChallengeComponent', () => {
  let component: FourthChallengeComponent;
  let fixture: ComponentFixture<FourthChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthChallengeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
