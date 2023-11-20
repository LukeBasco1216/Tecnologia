import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentinfoComponent } from './agentinfo.component';

describe('AgentinfoComponent', () => {
  let component: AgentinfoComponent;
  let fixture: ComponentFixture<AgentinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgentinfoComponent]
    });
    fixture = TestBed.createComponent(AgentinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
