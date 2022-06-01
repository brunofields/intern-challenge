import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixthChallengeComponent } from './sixth-challenge.component';

describe('SixthChallengeComponent', () => {
  let component: SixthChallengeComponent;
  let fixture: ComponentFixture<SixthChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SixthChallengeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SixthChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
