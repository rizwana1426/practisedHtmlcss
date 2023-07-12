import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Media2Component } from './media2.component';

describe('Media2Component', () => {
  let component: Media2Component;
  let fixture: ComponentFixture<Media2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Media2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Media2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
