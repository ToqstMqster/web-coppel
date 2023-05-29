import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportRecord2Component } from './report-record2.component';

describe('ReportRecord2Component', () => {
  let component: ReportRecord2Component;
  let fixture: ComponentFixture<ReportRecord2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportRecord2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportRecord2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
