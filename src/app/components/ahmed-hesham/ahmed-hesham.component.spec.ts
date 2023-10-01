import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhmedHeshamComponent } from './ahmed-hesham.component';

describe('AhmedHeshamComponent', () => {
  let component: AhmedHeshamComponent;
  let fixture: ComponentFixture<AhmedHeshamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AhmedHeshamComponent]
    });
    fixture = TestBed.createComponent(AhmedHeshamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
