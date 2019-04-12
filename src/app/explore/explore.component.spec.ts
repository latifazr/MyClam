import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EXPLOREComponent } from './explore.component';

describe('EXPLOREComponent', () => {
  let component: EXPLOREComponent;
  let fixture: ComponentFixture<EXPLOREComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EXPLOREComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EXPLOREComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
