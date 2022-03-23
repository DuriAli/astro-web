import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NybbleDevicesComponent } from './nybble-devices.component';

describe('NybbleDevicesComponent', () => {
  let component: NybbleDevicesComponent;
  let fixture: ComponentFixture<NybbleDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NybbleDevicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NybbleDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
