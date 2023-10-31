import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAddComponent } from './popup-add.component';

describe('PopupAddComponent', () => {
  let component: PopupAddComponent;
  let fixture: ComponentFixture<PopupAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupAddComponent]
    });
    fixture = TestBed.createComponent(PopupAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
