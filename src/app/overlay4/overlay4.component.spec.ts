import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Overlay4Component } from './overlay4.component';

describe('Overlay4Component', () => {
  let component: Overlay4Component;
  let fixture: ComponentFixture<Overlay4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Overlay4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Overlay4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
