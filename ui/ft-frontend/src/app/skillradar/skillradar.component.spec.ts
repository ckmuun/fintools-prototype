import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillradarComponent } from './skillradar.component';

describe('SkillradarComponent', () => {
  let component: SkillradarComponent;
  let fixture: ComponentFixture<SkillradarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillradarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillradarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
