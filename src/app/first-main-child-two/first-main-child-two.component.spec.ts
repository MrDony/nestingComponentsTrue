import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstMainChildTwoComponent } from './first-main-child-two.component';

describe('FirstMainChildTwoComponent', () => {
  let component: FirstMainChildTwoComponent;
  let fixture: ComponentFixture<FirstMainChildTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstMainChildTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstMainChildTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
