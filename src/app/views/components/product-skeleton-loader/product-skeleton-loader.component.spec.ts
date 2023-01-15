import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSkeletonLoaderComponent } from './product-skeleton-loader.component';

describe('ProductSkeletonLoaderComponent', () => {
  let component: ProductSkeletonLoaderComponent;
  let fixture: ComponentFixture<ProductSkeletonLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSkeletonLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSkeletonLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
