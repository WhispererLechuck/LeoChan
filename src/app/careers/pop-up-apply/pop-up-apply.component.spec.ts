import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpApplyComponent } from './pop-up-apply.component';

describe('PopUpApplyComponent', () => {
  let component: PopUpApplyComponent;
  let fixture: ComponentFixture<PopUpApplyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopUpApplyComponent]
    });
    fixture = TestBed.createComponent(PopUpApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
