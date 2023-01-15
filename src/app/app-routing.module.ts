import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { ExplorerPageComponent } from './views/explorer-page/explorer-page.component';
import { ComparePageComponent } from './views/compare-page/compare-page.component';

const routes: Routes = [
  {path: '', component:LandingPageComponent},
  {path: 'explore', component:ExplorerPageComponent},
  {path: 'compare', component:ComparePageComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
