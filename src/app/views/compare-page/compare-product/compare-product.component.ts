import { Component, OnInit, Input } from '@angular/core';
import { ProductCompare } from 'src/app/models/product-compare.model';
import { ValueConverterService } from 'src/app/services/value-converter.service';

@Component({
  selector: 'app-compare-product',
  templateUrl: './compare-product.component.html',
  styleUrls: ['./compare-product.component.css']
})
export class CompareProductComponent implements OnInit {

  @Input() product!: ProductCompare;

  constructor() { }

  ngOnInit(): void {
  }

  getStoreImage(): string{
    return ValueConverterService.getStoreImage(this.product.id);
  }

}
