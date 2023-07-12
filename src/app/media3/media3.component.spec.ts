import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Media3Component } from './media3.component';

describe('Media3Component', () => {
  let component: Media3Component;
  let fixture: ComponentFixture<Media3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Media3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Media3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
