import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexResponsiveComponent } from './flex-responsive.component';

describe('FlexResponsiveComponent', () => {
  let component: FlexResponsiveComponent;
  let fixture: ComponentFixture<FlexResponsiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexResponsiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
