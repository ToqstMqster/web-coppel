import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportRecord1Component } from './report-record1.component';

describe('ReportRecord1Component', () => {
  let component: ReportRecord1Component;
  let fixture: ComponentFixture<ReportRecord1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportRecord1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportRecord1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
