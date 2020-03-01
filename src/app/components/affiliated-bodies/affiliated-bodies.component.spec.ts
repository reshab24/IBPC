import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliatedBodiesComponent } from './affiliated-bodies.component';

describe('AffiliatedBodiesComponent', () => {
  let component: AffiliatedBodiesComponent;
  let fixture: ComponentFixture<AffiliatedBodiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffiliatedBodiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffiliatedBodiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
