import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public static getSites(){
    let site = localStorage.getItem(environment.LOCALSTORAGE_SITE_INFO);

    if (site == null || site == undefined)
    return [];

    return JSON.parse(site);
  }
}
