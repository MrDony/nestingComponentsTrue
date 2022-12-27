import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondMainChildTwoComponent } from './second-main-child-two.component';

describe('SecondMainChildTwoComponent', () => {
  let component: SecondMainChildTwoComponent;
  let fixture: ComponentFixture<SecondMainChildTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondMainChildTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondMainChildTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
