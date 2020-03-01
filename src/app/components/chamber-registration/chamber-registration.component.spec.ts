import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamberRegistrationComponent } from './chamber-registration.component';

describe('ChamberRegistrationComponent', () => {
  let component: ChamberRegistrationComponent;
  let fixture: ComponentFixture<ChamberRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChamberRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamberRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
