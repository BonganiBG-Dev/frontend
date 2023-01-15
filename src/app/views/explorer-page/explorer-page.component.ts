import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { Product } from 'src/app/models/product.model';
import { SearchQuery } from 'src/app/models/search-query.model';
import { ExploreService } from 'src/app/services/explore.service';

@Component({
  selector: 'app-explorer-page',
  templateUrl: './explorer-page.component.html',
  styleUrls: ['./explorer-page.component.css']
})
export class ExplorerPageComponent implements OnInit {

  constructor(private exploreService: ExploreService) { }

  currentCategory!: Category;

  async ngOnInit() {
    await this.loadProducts();
  }

  isLoading = true;
  searchQuery: SearchQuery = {};
  products: Product[] = [];
  lastPage = 0;

  async loadProducts(){
    this.isLoading = true;
    await this.exploreService.getProducts(this.searchQuery)
    .then((results) =>{
      this.products = results.data.products
      this.lastPage = results.data.last_page;
      this.searchQuery.page = results.data.current_page;
      this.searchQuery.sort = results.data.sort
    })
    .catch((error) => {
      alert("failed to load products");
    })
    .finally(() => {
      this.isLoading = false;
    })
  }

  async changeCategory($event: Category){
    this.searchQuery.c = $event._id;
    this.searchQuery.page = 1;
    await this.loadProducts();
  }

  async updateSort($sort: any){
    if ($sort == undefined || $sort == null)
    return;

    this.searchQuery.sort = $sort;
    await this.loadProducts();
  }

  async updatePage($page: number){
    this.searchQuery.page = $page;
    await this.loadProducts();
  }

}
