import {
  Component,
  OnInit,
  EventEmitter, Output,
} from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { GithubService } from '../../services/github.service';



@Component({
  selector: 'app-github-search-box',
  template: `
  <mat-form-field class="example-full-width">
  <input matInput type="text" [formControl]="search" placeholder="Search Github" autofocus>
  </mat-form-field>

  `
})

export class GithubSearchBoxComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() user: EventEmitter<any> = new EventEmitter<any>();
  @Output() repos: EventEmitter<any> = new EventEmitter<any>();
  search = new FormControl();
  constructor(public github: GithubService) {
  }

  ngOnInit(): void {
    this.search.valueChanges.pipe(
      debounceTime(400)
    ).subscribe((data) => {
      this.github.getUser(data).subscribe(user => {
        this.user.emit(user)
      })
      this.github.getRepos(data).subscribe(repos => {
        this.repos.emit(repos)
      })
    })

  }
}