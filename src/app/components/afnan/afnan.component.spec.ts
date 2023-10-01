import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfnanComponent } from './afnan.component';

describe('AfnanComponent', () => {
  let component: AfnanComponent;
  let fixture: ComponentFixture<AfnanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfnanComponent]
    });
    fixture = TestBed.createComponent(AfnanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
