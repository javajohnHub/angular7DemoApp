import { Component } from '@angular/core';
import {FlickrResult} from '../../models/flickr-result';

@Component({
  selector: 'app-flickr-search',
  template: `
    <div>

        <div class="form-group well">
          <app-flickr-search-box
            (results)="updateResults($event)"
          ></app-flickr-search-box>
        </div>


      <div *ngIf="results" class="search-res">
        <app-flickr-result
          *ngFor="let result of results"
          [result]="result">
        </app-flickr-result>
      </div>
    </div>
  `
})
export class FlickrSearchComponent {
  results: FlickrResult[];

  updateResults(results: FlickrResult[]): void {
    this.results = results;
  }
}

