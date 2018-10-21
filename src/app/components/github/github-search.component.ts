import { Component } from '@angular/core';

@Component({
  selector: 'app-github-search',
  template: `
  <app-github-search-box
  (loading)="loading = $event"
  (user)="updateUser($event)"
  (repos)="updateRepos($event)"
></app-github-search-box>
<div *ngIf="user && repos" style="overflow:auto;">

<app-github-result
          [user]="user"
          [repos]="repos">
        </app-github-result>

  `,
})
export class GithubSearchComponent {
  user: any;
  repos:any;
  loading: boolean;
  updateUser(user): void {
    this.user = user;
  }
  updateRepos(repos): void {
    this.repos = repos;
  }
}
