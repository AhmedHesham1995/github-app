import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Afnan2Component } from './afnan2.component';

describe('Afnan2Component', () => {
  let component: Afnan2Component;
  let fixture: ComponentFixture<Afnan2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Afnan2Component]
    });
    fixture = TestBed.createComponent(Afnan2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
