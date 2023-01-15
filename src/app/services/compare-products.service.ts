import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProductCompare } from '../models/product-compare.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CompareProductsService {

  constructor() { }

  public static addProduct(product: Product){
    let prod: ProductCompare = convertProductModel(product);
    let currentProducts: ProductCompare[] = getProductsFromLocalStorage();

    if (containsProduct(currentProducts,prod))
    return;
    currentProducts.push(prod);
    writeToLocalStorage(currentProducts);
  }

  getProducts(){
    return getProductsFromLocalStorage();
  }

  removeProduct(id: string){
    removeProductFromList(id);
  }

  public static getItemCount(): number{
    return getProductsFromLocalStorage().length
  }

}

function convertProductModel(product: Product): ProductCompare {
  return {
    id: product._id,
    img: product.Img_url,
    link: product.Page_link,
    name: product.Name,
    price: product.Price,
    site_id: product.Site_id
  }
}

function getProductsFromLocalStorage(): ProductCompare[] {
  let products = localStorage.getItem(environment.LOCALSTORAGE_COMPARE_PRODUCTS);

  if (products == null || products == undefined)
  return [];

  return JSON.parse(products);
}

function containsProduct(currentProducts: ProductCompare[], prod: ProductCompare): boolean {
  let product = currentProducts.find(item => item.id == prod.id);
  return product == null || product == undefined ? false : true;
}

function writeToLocalStorage(currentProducts: ProductCompare[]) {
  let products = JSON.stringify(currentProducts);
  localStorage.setItem(environment.LOCALSTORAGE_COMPARE_PRODUCTS, products);
}

function removeProductFromList(id: string) {
  let products = getProductsFromLocalStorage();

  let index = products.findIndex(item => {
    return item.id === id;
  });
  products.splice(index, 1);
  writeToLocalStorage(products);
}

