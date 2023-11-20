import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanklistComponent } from './tanklist.component';

describe('TanklistComponent', () => {
  let component: TanklistComponent;
  let fixture: ComponentFixture<TanklistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TanklistComponent]
    });
    fixture = TestBed.createComponent(TanklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
