import {
  Component,
  OnInit,
  ElementRef,
  EventEmitter, Output,
} from '@angular/core';
import {debounceTime } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import {GiphyResult} from '../../models/giphy-result';
import {GiphyService} from '../../services/giphy.service';

@Component({
  selector: 'app-giphy-search-box',
  template: `
  <mat-form-field class="example-full-width">
  <input matInput type="text" [formControl]="search" placeholder="Search Giphy" autofocus>
  </mat-form-field>

  `
})

export class GiphySearchBoxComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<GiphyResult[]> = new EventEmitter<GiphyResult[]>();
  search = new FormControl();
  constructor(public giphy: GiphyService) {
  }

  ngOnInit(): void {
    this.search.valueChanges.pipe(
      debounceTime(400)
    ).subscribe((data) => {
      this.giphy.search(data).subscribe((results: GiphyResult[]) => {
        console.log(results)
        this.results.emit(results);
      });
    })

  }
}
