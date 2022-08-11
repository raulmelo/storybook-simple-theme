import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardElasticComponent } from './card-elastic.component';

describe('CardElasticComponent', () => {
  let component: CardElasticComponent;
  let fixture: ComponentFixture<CardElasticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CardElasticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardElasticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
