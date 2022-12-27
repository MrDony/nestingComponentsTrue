import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstMainChildOneComponent } from './first-main-child-one.component';

describe('FirstMainChildOneComponent', () => {
  let component: FirstMainChildOneComponent;
  let fixture: ComponentFixture<FirstMainChildOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstMainChildOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstMainChildOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
