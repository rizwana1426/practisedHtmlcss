import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Flex2Component } from './flex2.component';

describe('Flex2Component', () => {
  let component: Flex2Component;
  let fixture: ComponentFixture<Flex2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Flex2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Flex2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
