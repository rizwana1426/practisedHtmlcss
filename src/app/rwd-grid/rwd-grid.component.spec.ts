import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RwdGridComponent } from './rwd-grid.component';

describe('RwdGridComponent', () => {
  let component: RwdGridComponent;
  let fixture: ComponentFixture<RwdGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RwdGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RwdGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
