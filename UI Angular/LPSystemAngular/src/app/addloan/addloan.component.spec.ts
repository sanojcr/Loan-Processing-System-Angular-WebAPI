import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddloanComponent } from './addloan.component';

describe('AddloanComponent', () => {
  let component: AddloanComponent;
  let fixture: ComponentFixture<AddloanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddloanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
