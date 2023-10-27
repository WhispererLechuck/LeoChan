import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeShopComponent } from './welcome-shop.component';

describe('WelcomeShopComponent', () => {
  let component: WelcomeShopComponent;
  let fixture: ComponentFixture<WelcomeShopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeShopComponent]
    });
    fixture = TestBed.createComponent(WelcomeShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
