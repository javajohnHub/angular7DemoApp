import { Component } from '@angular/core';
import {BookSearchResult} from '../../models/book-search-result';

@Component({
  selector: 'app-book-search',
  template: `

    <div>
        <div>
          <app-search-box (results)="updateResults($event)"></app-search-box>
        </div>
      <div *ngIf="results">
      <mat-grid-list cols="3" cols-md="2" cols-sm="1" gutter="12px" row-height="3:3">
      <mat-grid-tile *ngFor="let result of results">
      <app-search-result  [result]="result"></app-search-result>
        <mat-grid-tile-footer>
          <h3><a href="{{result.volumeInfo.canonicalVolumeLink}}" target="_blank">{{result.volumeInfo.title}}</a></h3>

          </mat-grid-tile-footer>
      </mat-grid-tile>
    </mat-grid-list>

      </div>
    </div>
  `
})
export class BookSearchComponent {
  results: BookSearchResult[];

  updateResults(results: BookSearchResult[]): void {
    this.results = results;
  }
}

