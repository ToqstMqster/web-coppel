import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportRecord3Component } from './report-record3.component';

describe('ReportRecord3Component', () => {
  let component: ReportRecord3Component;
  let fixture: ComponentFixture<ReportRecord3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportRecord3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportRecord3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
