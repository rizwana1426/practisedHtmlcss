import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Buton1Component } from './buton1.component';

describe('Buton1Component', () => {
  let component: Buton1Component;
  let fixture: ComponentFixture<Buton1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Buton1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Buton1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
