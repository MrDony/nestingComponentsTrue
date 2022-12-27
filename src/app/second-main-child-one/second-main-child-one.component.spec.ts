import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondMainChildOneComponent } from './second-main-child-one.component';

describe('SecondMainChildOneComponent', () => {
  let component: SecondMainChildOneComponent;
  let fixture: ComponentFixture<SecondMainChildOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondMainChildOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondMainChildOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
