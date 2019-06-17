import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsHomeComponent } from './reports-home.component';

describe('ReportsHomeComponent', () => {
  let component: ReportsHomeComponent;
  let fixture: ComponentFixture<ReportsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
