import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reportfollowup2Component } from './reportfollowup2.component';

describe('Reportfollowup2Component', () => {
  let component: Reportfollowup2Component;
  let fixture: ComponentFixture<Reportfollowup2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reportfollowup2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reportfollowup2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
