import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookSearchComponent} from './components/books/book-search.component';
import {FlickrSearchComponent} from './components/flickr/flickr-search.component';
import {GiphySearchComponent} from './components/giphy/giphy-search.component';
import { GithubSearchComponent } from './components/github/github-search.component';

const routes: Routes = [
  { path: 'books', component: BookSearchComponent },
  { path: 'flickr', component: FlickrSearchComponent },
  { path: 'giphy', component: GiphySearchComponent },
  { path: 'github', component: GithubSearchComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class FrontRoutingModule { }
