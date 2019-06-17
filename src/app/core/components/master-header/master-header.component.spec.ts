import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterHeaderComponent } from './master-header.component';

describe('MasterHeaderComponent', () => {
  let component: MasterHeaderComponent;
  let fixture: ComponentFixture<MasterHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
