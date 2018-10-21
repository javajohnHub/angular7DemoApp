import { Component } from '@angular/core';

@Component({
  selector: 'app-github-search',
  template: `

        <div>
          <app-github-search-box
            (loading)="loading = $event"
            (user)="updateUser($event)"
            (repos)="updateRepos($event)"
          ></app-github-search-box>
        </div>

      <div *ngIf="repos && user">
        <app-github-result
          [user]="user"
          [repos]="repos">
        </app-github-result>
      </div>
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
