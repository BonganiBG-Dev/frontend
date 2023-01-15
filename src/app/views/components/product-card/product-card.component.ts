import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ValueConverterService } from 'src/app/services/value-converter.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  constructor() { }

  @Input() product!: any;

  ngOnInit(): void {
  }

  getStoreName(id: string){
    return ValueConverterService.getStoreName(id);
  }
}
