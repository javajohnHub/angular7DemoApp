import {
  Component,
  OnInit,
  EventEmitter,
  Output
} from '@angular/core';
import {BookService} from '../../services/book.service';

import { FormControl } from '@angular/forms';
import { Book } from '../../models/book';
import { debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-search-box',
  template: `
    <input type="text" [formControl]="search" placeholder="Search Google Books" autofocus>
    <div *ngIf="items">
    Total: {{items}}
    </div>

  `
})

export class SearchBoxComponent implements OnInit {
  @Output() results: EventEmitter<Book[]> = new EventEmitter<Book[]>();
  search= new FormControl();
  items;
  constructor(public book: BookService) {
  }

  ngOnInit() {
    this.search.valueChanges.pipe(
      debounceTime(400)
    ).subscribe((data) => {
      this.book.searchBooks(data).subscribe((results: any) => {
        this.items = results.totalItems;
        this.results.emit(results.items);
      });
    })
}


 }
