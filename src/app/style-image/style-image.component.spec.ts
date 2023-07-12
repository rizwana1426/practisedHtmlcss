import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleImageComponent } from './style-image.component';

describe('StyleImageComponent', () => {
  let component: StyleImageComponent;
  let fixture: ComponentFixture<StyleImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
