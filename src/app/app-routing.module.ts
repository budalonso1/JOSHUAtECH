import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';


const routes: Routes = [{
  path: '', component: HomePagesComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
