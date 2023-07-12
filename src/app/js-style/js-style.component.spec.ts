import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsStyleComponent } from './js-style.component';

describe('JsStyleComponent', () => {
  let component: JsStyleComponent;
  let fixture: ComponentFixture<JsStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
