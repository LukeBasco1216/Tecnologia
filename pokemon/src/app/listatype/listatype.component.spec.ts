import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListatypeComponent } from './listatype.component';

describe('ListatypeComponent', () => {
  let component: ListatypeComponent;
  let fixture: ComponentFixture<ListatypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListatypeComponent]
    });
    fixture = TestBed.createComponent(ListatypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
