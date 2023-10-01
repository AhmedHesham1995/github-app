import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EssamKonafaComponent } from './essam-konafa.component';

describe('EssamKonafaComponent', () => {
  let component: EssamKonafaComponent;
  let fixture: ComponentFixture<EssamKonafaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EssamKonafaComponent]
    });
    fixture = TestBed.createComponent(EssamKonafaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
