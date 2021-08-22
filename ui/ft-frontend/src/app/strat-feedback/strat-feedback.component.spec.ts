import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StratFeedbackComponent } from './strat-feedback.component';

describe('StratFeedbackComponent', () => {
  let component: StratFeedbackComponent;
  let fixture: ComponentFixture<StratFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StratFeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StratFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
