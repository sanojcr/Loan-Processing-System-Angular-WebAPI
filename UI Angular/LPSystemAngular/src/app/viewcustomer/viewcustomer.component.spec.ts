import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcustomerComponent } from './viewcustomer.component';

describe('ViewcustomerComponent', () => {
  let component: ViewcustomerComponent;
  let fixture: ComponentFixture<ViewcustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
