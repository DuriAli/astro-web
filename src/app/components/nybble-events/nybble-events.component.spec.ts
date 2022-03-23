import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NybbleEventsComponent } from './nybble-events.component';

describe('NybbleEventsComponent', () => {
  let component: NybbleEventsComponent;
  let fixture: ComponentFixture<NybbleEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NybbleEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NybbleEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
