import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StratcompareComponent } from './stratcompare.component';

describe('StratcompareComponent', () => {
  let component: StratcompareComponent;
  let fixture: ComponentFixture<StratcompareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StratcompareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StratcompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
