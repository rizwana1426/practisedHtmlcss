import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RwdImgComponent } from './rwd-img.component';

describe('RwdImgComponent', () => {
  let component: RwdImgComponent;
  let fixture: ComponentFixture<RwdImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RwdImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RwdImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
