import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadScriptComponent } from './head-script.component';

describe('HeadScriptComponent', () => {
  let component: HeadScriptComponent;
  let fixture: ComponentFixture<HeadScriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadScriptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
