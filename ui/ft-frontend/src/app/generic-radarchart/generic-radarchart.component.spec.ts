import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericRadarchartComponent } from './generic-radarchart.component';

describe('GenericRadarchartComponent', () => {
  let component: GenericRadarchartComponent;
  let fixture: ComponentFixture<GenericRadarchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericRadarchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericRadarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
