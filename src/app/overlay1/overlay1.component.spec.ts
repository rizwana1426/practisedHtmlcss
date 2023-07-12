import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Overlay1Component } from './overlay1.component';

describe('Overlay1Component', () => {
  let component: Overlay1Component;
  let fixture: ComponentFixture<Overlay1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Overlay1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Overlay1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
