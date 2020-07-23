import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewloanadminComponent } from './viewloanadmin.component';

describe('ViewloanadminComponent', () => {
  let component: ViewloanadminComponent;
  let fixture: ComponentFixture<ViewloanadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewloanadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewloanadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
