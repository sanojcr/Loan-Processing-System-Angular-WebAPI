import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewloanComponent } from './newloan.component';

describe('NewloanComponent', () => {
  let component: NewloanComponent;
  let fixture: ComponentFixture<NewloanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewloanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
