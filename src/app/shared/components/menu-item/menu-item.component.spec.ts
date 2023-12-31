import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantLinkComponent } from './merchant-link.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('MerchantLinkComponent', () => {
  let component: MerchantLinkComponent;
  let fixture: ComponentFixture<MerchantLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [MerchantLinkComponent]
    });
    fixture = TestBed.createComponent(MerchantLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display 3 full, 1 half and 1 empty star when a merchant\'s score is 3.5', () => {
    component.merchantScore = 3.5;
    component.ngOnInit();
    expect(component.merchantScoreRound).toBe(3);
    expect(component.merchantScoreRemainder).toBe(1);
  });

  it('should display 4 full and 1 empty star when a merchant\'s score is 4', () => {
    component.merchantScore = 4;
    component.ngOnInit();
    expect(component.merchantScoreRound).toBe(4);
    expect(component.merchantScoreRemainder).toBe(1);
  });
});