import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { SearchQuery } from 'src/app/models/search-query.model';
import { CompareProductsService } from 'src/app/services/compare-products.service';
import { ExploreService } from 'src/app/services/explore.service';
import { ValueConverterService } from 'src/app/services/value-converter.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() currentCategory!: string;
  @Input() products: Product[] = [];
  @Input() isLoading = true;
  @Input() sort = {field: "Price", order: -1};
  @Input() page!: number;
  @Input() lastPage = 0;

  @Output() loadProducts = new EventEmitter();
  @Output() updatePage = new EventEmitter<number>();
  @Output() updateSort = new EventEmitter<{}>();

  constructor(private exploreService: ExploreService) { }

  async ngOnInit(){
  }

  async changePage(next: boolean){
    if (this.page == undefined || this.page == null)
    this.page = 1;

    if (next)
    {
      if (this.page < this.lastPage)
      this.page++;
    }
    else
    {
      if (this.page > 1)
      this.page--;
    }

    this.updatePage.emit(this.page);
    await this.loadProducts.emit();
    scrollTo(1,1);
  }

  getNumberOfResults(): number{
    return this.products.length
  }

  addProductToComparison(product: Product){
    CompareProductsService.addProduct(product);
    alert("thing added")
  }

  displaySorting(): string{
    return this.sort.field.toLocaleLowerCase() + this.sort.order;
  }

  changeSort(value: any){
    this.sort = ValueConverterService.getSortValue(value) || {field: "Price", order: -1};
    this.updateSort.emit(this.sort)
    this.loadProducts.emit();
  }



}
