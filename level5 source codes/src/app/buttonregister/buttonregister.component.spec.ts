import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonregisterComponent } from './buttonregister.component';

describe('ButtonregisterComponent', () => {
  let component: ButtonregisterComponent;
  let fixture: ComponentFixture<ButtonregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonregisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
