import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertMinorComponent } from './alert-minor.component';

describe('AlertMinorComponent', () => {
  let component: AlertMinorComponent;
  let fixture: ComponentFixture<AlertMinorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertMinorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertMinorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
