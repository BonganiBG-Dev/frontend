import { Component, OnInit } from '@angular/core';
import { SetupService } from './services/setup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private setupService: SetupService){}

  isLoading = true;

  async ngOnInit(){
    this.isLoading = true;
    await this.setupService.writeSiteToLocalStorage();
    this.isLoading = false;
  }

  title = 'pc-part-hunter';
}
