import { Component } from '@angular/core';
import {FlickrResult} from '../../models/flickr-result';

@Component({
  selector: 'app-flickr-search',
  template: `



        <div class="form-group well">
          <app-flickr-search-box
            (results)="updateResults($event)"
          ></app-flickr-search-box>
        </div>

      <div *ngIf="results">
      <mat-grid-list cols="3" cols-md="2" cols-sm="1" gutter="12px" row-height="3:3">
      <mat-grid-tile *ngFor="let result of results">
      <app-flickr-result
          [result]="result">
        </app-flickr-result>
        <mat-grid-tile-footer>
          <h3>{{result.title}}</h3>
          </mat-grid-tile-footer>
      </mat-grid-tile>
    </mat-grid-list>
  `
})
export class FlickrSearchComponent {
  results: FlickrResult[];

  updateResults(results: FlickrResult[]): void {
    this.results = results;
  }
}

