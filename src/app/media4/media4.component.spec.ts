import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Media4Component } from './media4.component';

describe('Media4Component', () => {
  let component: Media4Component;
  let fixture: ComponentFixture<Media4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Media4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Media4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
