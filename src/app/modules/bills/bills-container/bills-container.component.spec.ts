import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BillsContainerComponent } from './bills-container.component';

describe('BillsContainerComponent', () => {
  let component: BillsContainerComponent;
  let fixture: ComponentFixture<BillsContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BillsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
