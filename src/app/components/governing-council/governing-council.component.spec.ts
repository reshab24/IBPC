import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoverningCouncilComponent } from './governing-council.component';

describe('GoverningCouncilComponent', () => {
  let component: GoverningCouncilComponent;
  let fixture: ComponentFixture<GoverningCouncilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoverningCouncilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoverningCouncilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
