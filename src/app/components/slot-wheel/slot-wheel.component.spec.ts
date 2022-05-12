import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotWheelComponent } from './slot-wheel.component';

describe('SlotWheelComponent', () => {
  let component: SlotWheelComponent;
  let fixture: ComponentFixture<SlotWheelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlotWheelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotWheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
