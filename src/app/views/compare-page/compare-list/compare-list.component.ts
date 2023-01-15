import { Component, OnInit } from '@angular/core';
import { ProductCompare } from 'src/app/models/product-compare.model';
import { CompareProductsService } from 'src/app/services/compare-products.service';

@Component({
  selector: 'app-compare-list',
  templateUrl: './compare-list.component.html',
  styleUrls: ['./compare-list.component.css']
})
export class CompareListComponent implements OnInit {

  constructor(private compareService: CompareProductsService) { }

  products: ProductCompare[] = [];

  isLoading = true;

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(){
    this.isLoading = true;
    this.products = this.compareService.getProducts();
    this.isLoading = false;
  }

  removeProduct(id: string){
    this.compareService.removeProduct(id);
    this.loadProducts();
  }

}
