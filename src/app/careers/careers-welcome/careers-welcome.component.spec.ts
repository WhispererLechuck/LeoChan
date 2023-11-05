import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersWelcomeComponent } from './careers-welcome.component';

describe('CareersWelcomeComponent', () => {
  let component: CareersWelcomeComponent;
  let fixture: ComponentFixture<CareersWelcomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CareersWelcomeComponent]
    });
    fixture = TestBed.createComponent(CareersWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
