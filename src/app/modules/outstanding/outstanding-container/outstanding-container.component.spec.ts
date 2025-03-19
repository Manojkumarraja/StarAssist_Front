import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OutstandingContainerComponent } from './outstanding-container.component';

describe('OutstandingContainerComponent', () => {
  let component: OutstandingContainerComponent;
  let fixture: ComponentFixture<OutstandingContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OutstandingContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutstandingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
