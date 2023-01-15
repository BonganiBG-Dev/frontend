import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { ExploreService } from 'src/app/services/explore.service';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {

  constructor(private exploreService: ExploreService) { }

  @Output() category = new EventEmitter<Category>();

  categories: Category[] = [];

  isLoading = true;
  async ngOnInit() {
    await this.loadCategories();
  }

  async loadCategories(){
    this.isLoading = true;
    await this.exploreService.getCategories().then((results) => {
      this.categories = results.data.categories;
    })
    .catch((error) => {
      alert("Error loading categories")
    })
    .finally(() => {
      this.isLoading = false;
    });
  }

  changeCategory(category: Category){
    this.category.emit(category);
  }


}
