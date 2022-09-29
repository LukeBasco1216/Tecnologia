import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlListComponent } from './userl-list.component';

describe('UserlListComponent', () => {
  let component: UserlListComponent;
  let fixture: ComponentFixture<UserlListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserlListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserlListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
