import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerAlert } from './seller-alert';

describe('SellerAlert', () => {
  let component: SellerAlert;
  let fixture: ComponentFixture<SellerAlert>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellerAlert],
    }).compileComponents();

    fixture = TestBed.createComponent(SellerAlert);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
