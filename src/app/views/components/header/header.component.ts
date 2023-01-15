import { Component, OnInit } from '@angular/core';
import { CompareProductsService } from 'src/app/services/compare-products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  compareItemCount(){
    return CompareProductsService.getItemCount();
  }
}
