import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaScript1Component } from './java-script1.component';

describe('JavaScript1Component', () => {
  let component: JavaScript1Component;
  let fixture: ComponentFixture<JavaScript1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavaScript1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaScript1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
