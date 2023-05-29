import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reportfollowup1Component } from './reportfollowup1.component';

describe('Reportfollowup1Component', () => {
  let component: Reportfollowup1Component;
  let fixture: ComponentFixture<Reportfollowup1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reportfollowup1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reportfollowup1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
