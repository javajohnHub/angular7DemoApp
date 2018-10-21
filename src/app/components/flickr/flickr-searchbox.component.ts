import {
  Component,
  OnInit,
  ElementRef,
  EventEmitter, Output,
} from '@angular/core';

import {FlickrResult} from '../../models/flickr-result';
import {FlickrService} from '../../services/flickr.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-flickr-search-box',
  template: `
  <mat-form-field class="example-full-width">
  <input matInput type="text" [formControl]="search" placeholder="Search Flickr" autofocus>
  </mat-form-field>

  `
})

export class FlickrSearchBoxComponent implements OnInit {
  @Output() results: EventEmitter<FlickrResult[]> = new EventEmitter<FlickrResult[]>();
  search = new FormControl();
  constructor(public flickr: FlickrService,
              private el: ElementRef) {
  }

  ngOnInit(): void {
    this.search.valueChanges.pipe(
      debounceTime(400),
    ).subscribe((data) => {
      this.flickr.search(data).subscribe((results: FlickrResult[]) => {
        console.log(results)
        this.results.emit(results);
      });
    })

  }
}
