import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselCARDComponent } from './carousel-card.component';

describe('CarouselCARDComponent', () => {
  let component: CarouselCARDComponent;
  let fixture: ComponentFixture<CarouselCARDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselCARDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselCARDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
