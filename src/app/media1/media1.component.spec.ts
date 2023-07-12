import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Media1Component } from './media1.component';

describe('Media1Component', () => {
  let component: Media1Component;
  let fixture: ComponentFixture<Media1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Media1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Media1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
