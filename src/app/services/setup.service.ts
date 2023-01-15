import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';
import { Site } from '../models/site.model';

@Injectable({
  providedIn: 'root'
})
export class SetupService {

  constructor() { }

  private async loadSites(){
    return await axios({
      method: 'GET',
      baseURL: environment.PRODUCT_API_URL,
      url: environment.SITE_ENDPOINT
    });
  }

  async writeSiteToLocalStorage(){
    this.loadSites().then((results) => {
      let sites: Site[] = results.data.sites;
      localStorage.removeItem(environment.LOCALSTORAGE_SITE_INFO);
      localStorage.setItem(environment.LOCALSTORAGE_SITE_INFO, JSON.stringify(sites));
    })
    .catch((error) => {
      alert("error loading websites");
    });
  }

}

