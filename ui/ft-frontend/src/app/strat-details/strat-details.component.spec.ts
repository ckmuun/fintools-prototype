import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StratDetailsComponent } from './strat-details.component';

describe('StratDetailsComponent', () => {
  let component: StratDetailsComponent;
  let fixture: ComponentFixture<StratDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StratDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StratDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
