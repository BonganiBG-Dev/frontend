// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  PRODUCT_API_URL: "http://localhost:8080",
  PRODUCT_ENDPOINT: "/product",
  TOP_PICKS_ENDPOINT: "/product/picks",
  CATEGORY_ENDPOINT: "/category",
  SITE_ENDPOINT: "/site",
  LOCALSTORAGE_COMPARE_PRODUCTS: "compare_products_list",
  LOCALSTORAGE_SITE_INFO: "site_information"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
