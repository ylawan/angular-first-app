import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertMajorComponent } from './alert-major.component';

describe('AlertMajorComponent', () => {
  let component: AlertMajorComponent;
  let fixture: ComponentFixture<AlertMajorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertMajorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertMajorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
