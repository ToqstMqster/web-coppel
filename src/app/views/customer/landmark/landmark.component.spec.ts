import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandmarkComponent } from './landmark.component';

describe('LandmarkComponent', () => {
  let component: LandmarkComponent;
  let fixture: ComponentFixture<LandmarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandmarkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
