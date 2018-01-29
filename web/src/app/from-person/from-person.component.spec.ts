import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromPersonComponent } from './from-person.component';

describe('FromPersonComponent', () => {
  let component: FromPersonComponent;
  let fixture: ComponentFixture<FromPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
