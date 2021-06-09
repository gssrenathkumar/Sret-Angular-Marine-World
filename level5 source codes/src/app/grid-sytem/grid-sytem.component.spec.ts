import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridSytemComponent } from './grid-sytem.component';

describe('GridSytemComponent', () => {
  let component: GridSytemComponent;
  let fixture: ComponentFixture<GridSytemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridSytemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridSytemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
