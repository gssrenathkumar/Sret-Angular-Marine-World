import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DolphineComponent } from './dolphine.component';

describe('DolphineComponent', () => {
  let component: DolphineComponent;
  let fixture: ComponentFixture<DolphineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DolphineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DolphineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
