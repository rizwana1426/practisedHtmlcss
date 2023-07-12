import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MqComponent } from './mq.component';

describe('MqComponent', () => {
  let component: MqComponent;
  let fixture: ComponentFixture<MqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
