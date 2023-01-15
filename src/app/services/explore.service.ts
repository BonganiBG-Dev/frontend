import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';
import { SearchQuery } from '../models/search-query.model';

@Injectable({
  providedIn: 'root'
})
export class ExploreService {

  constructor() { }

  async getProducts(searchQuery: SearchQuery = {}){
    return await axios({
      method: 'GET',
      baseURL: environment.PRODUCT_API_URL,
      url: environment.PRODUCT_ENDPOINT,
      params: searchQuery
    });
  }

  async getCategories(){
    return await axios({
      method: 'GET',
      baseURL: environment.PRODUCT_API_URL,
      url: environment.CATEGORY_ENDPOINT
    });
  }

  async getTopPicks(id: string){
    return await axios({
      method: 'GET',
      baseURL: environment.PRODUCT_API_URL,
      url: environment.TOP_PICKS_ENDPOINT + `/${id}`
    });
  }
}
