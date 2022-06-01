import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthChallengeComponent } from './fifth-challenge.component';

describe('FifthChallengeComponent', () => {
  let component: FifthChallengeComponent;
  let fixture: ComponentFixture<FifthChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FifthChallengeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FifthChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
