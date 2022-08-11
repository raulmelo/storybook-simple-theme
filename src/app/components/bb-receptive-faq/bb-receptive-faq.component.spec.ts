import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BbReceptiveFaqComponent } from './bb-receptive-faq.component';

describe('BbReceptiveFaqComponent', () => {
  let component: BbReceptiveFaqComponent;
  let fixture: ComponentFixture<BbReceptiveFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BbReceptiveFaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BbReceptiveFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
