import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromDataComponent } from './from-data.component';

describe('FromDataComponent', () => {
  let component: FromDataComponent;
  let fixture: ComponentFixture<FromDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
