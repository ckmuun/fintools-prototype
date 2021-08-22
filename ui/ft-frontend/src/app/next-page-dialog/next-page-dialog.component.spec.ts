import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextPageDialogComponent } from './next-page-dialog.component';

describe('NextPageDialogComponent', () => {
  let component: NextPageDialogComponent;
  let fixture: ComponentFixture<NextPageDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextPageDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NextPageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
