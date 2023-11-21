import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapinfoComponent } from './mapinfo.component';

describe('MapinfoComponent', () => {
  let component: MapinfoComponent;
  let fixture: ComponentFixture<MapinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapinfoComponent]
    });
    fixture = TestBed.createComponent(MapinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
