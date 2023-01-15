import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ValueConverterService {

  constructor() { }

  public static getStoreName(id: string): string{
    if (id == '6e6e1285-3e59-41b4-abeb-8dd259bacefb')
    return "Evetech"

    if (id == '955f48c3-8dc9-478f-a8e9-9b33b549262b')
    return "Titan-Ice"

    if (id == 'cfd2dc53-9145-416e-aad9-055a66c530b2')
    return 'Dreamware Tech'

    return "";
  }

  public static getStoreImage(id: string): string{
    if (id == '6e6e1285-3e59-41b4-abeb-8dd259bacefb')
    return "/assets/images/evetech.png"

    if (id == '955f48c3-8dc9-478f-a8e9-9b33b549262b')
    return "/assets/images/titan-ice.png"

    if (id == 'cfd2dc53-9145-416e-aad9-055a66c530b2')
    return '/assets/images/dreanware.png'

    return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNZo8HJXlzsEbcnfi6ciTTC9I1SF8Pb0wY6A&usqp=CAU";
  }


  public static getSortValue(input: string){
    switch(input)
    {
      case "price1": return {field: "Price", order: 1};
      case "price-1": return {field: "Price", order: -1};
      case "name1": return {field: "Name", order: 1};
      case "name-1": return {field: "Name", order: -1};
      default: return undefined;
    }
  }
}
