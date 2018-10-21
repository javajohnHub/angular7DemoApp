import { Component } from '@angular/core';
import {GiphyResult} from '../../models/giphy-result';

@Component({
  selector: 'app-giphy-search',
  template: `

  <app-giphy-search-box
            (loading)="loading = $event"
            (results)="updateResults($event)"
          ></app-giphy-search-box>
<div *ngIf="results">
<mat-grid-list cols="3" cols-md="2" cols-sm="1" gutter="12px" row-height="3:3">
<mat-grid-tile *ngFor="let result of results">
<app-giphy-result
          [result]="result">
        </app-giphy-result>
</mat-grid-tile>
</mat-grid-list>
  `,
})
export class GiphySearchComponent {
  results: GiphyResult[];
  loading: boolean;
  updateResults(results: GiphyResult[]): void {
    this.results = results;
  }
}

