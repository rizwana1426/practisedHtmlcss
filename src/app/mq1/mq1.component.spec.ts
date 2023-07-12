import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mq1Component } from './mq1.component';

describe('Mq1Component', () => {
  let component: Mq1Component;
  let fixture: ComponentFixture<Mq1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mq1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mq1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
