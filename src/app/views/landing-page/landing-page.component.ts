import { Component, OnInit } from '@angular/core';
import { Site } from 'src/app/models/site.model';
import { TopPicks } from 'src/app/models/top-picks.model';
import { ExploreService } from 'src/app/services/explore.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private exploreService: ExploreService) { }

  topPicks: TopPicks[] = [];

  async ngOnInit(){
    await this.loadTopPicks();
  }

  async loadTopPicks(){
    let sites: Site[] = LocalStorageService.getSites();

    sites.forEach(async (site) => {
      await this.getTopPick({
        id: site._id,
        name: site.Name
      });
    });
  }

  async getTopPick(category: any) {
      await this.exploreService.getTopPicks(category.id).then((results) => {
        this.topPicks.push({
          category: category.name,
          products: results.data.products
        });
      })
      .catch((error) => {
        alert("error loading top picks")
      });
  }
}
