import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoresBannerComponent } from './stores-banner.component';

describe('StoresBannerComponent', () => {
  let component: StoresBannerComponent;
  let fixture: ComponentFixture<StoresBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoresBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoresBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
