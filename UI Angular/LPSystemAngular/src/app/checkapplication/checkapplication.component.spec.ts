import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckapplicationComponent } from './checkapplication.component';

describe('CheckapplicationComponent', () => {
  let component: CheckapplicationComponent;
  let fixture: ComponentFixture<CheckapplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckapplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
