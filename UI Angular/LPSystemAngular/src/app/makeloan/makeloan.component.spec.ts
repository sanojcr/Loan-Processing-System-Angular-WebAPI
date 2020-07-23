import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeloanComponent } from './makeloan.component';

describe('MakeloanComponent', () => {
  let component: MakeloanComponent;
  let fixture: ComponentFixture<MakeloanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeloanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
