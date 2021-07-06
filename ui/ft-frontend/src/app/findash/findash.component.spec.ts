import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindashComponent } from './findash.component';

describe('FindashComponent', () => {
  let component: FindashComponent;
  let fixture: ComponentFixture<FindashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
