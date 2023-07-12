import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grid10Component } from './grid10.component';

describe('Grid10Component', () => {
  let component: Grid10Component;
  let fixture: ComponentFixture<Grid10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grid10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Grid10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
