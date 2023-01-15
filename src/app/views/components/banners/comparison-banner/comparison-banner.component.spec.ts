import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonBannerComponent } from './comparison-banner.component';

describe('ComparisonBannerComponent', () => {
  let component: ComparisonBannerComponent;
  let fixture: ComponentFixture<ComparisonBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparisonBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparisonBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
