import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTimelineComponent } from './timeline.component';

describe('TimelineComponent', () => {
  let component: CustomTimelineComponent;
  let fixture: ComponentFixture<CustomTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomTimelineComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
