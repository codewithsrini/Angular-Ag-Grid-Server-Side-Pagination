import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterFooterComponent } from './master-footer.component';

describe('MasterFooterComponent', () => {
  let component: MasterFooterComponent;
  let fixture: ComponentFixture<MasterFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
