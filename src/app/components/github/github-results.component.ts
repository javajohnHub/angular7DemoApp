import {
  Component, Input,
} from '@angular/core';

@Component({
  selector: 'app-github-result',
  template: `
<div *ngIf="user">

  <div class="panel panel-default">
    <div class="panel-heading">
      <h3 class="panel-title">{{user.login}}</h3>
    </div>
    <div class="panel-body">
      <div class="row">
        <div class="col-md-4">
          <img class="img-thumbnail" src="{{user.avatar_url}}">
          <a class="btn btn-default btn-block" href="{{user.html_url}}" target="_blank">View Profile</a>
        </div>
        <div class="col-md-8">
          <div class="stats">
            <span class="label label-default">{{user.public_repos}} Public Repos</span>
            <span class="label label-primary">{{user.public_gists}} Public Gists</span>
            <span class="label label-success">{{user.followers}} Followers</span>
            <span class="label label-info">{{user.following}} Following</span>
          </div>
          <br/>
          <ul class="list-group">
            <li class="list-group-item"><strong>Username: </strong>{{user.login}}</li>
            <li class="list-group-item"><strong>Location: </strong>{{user.location}}</li>
            <li class="list-group-item"><strong>Email: </strong>{{user.email}}</li>
            <li class="list-group-item"><strong>Blog: </strong>{{user.blog}}</li>
            <li class="list-group-item"><strong>Joined: </strong>{{user.created_at}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <mat-grid-list cols="3" cols-md="2" cols-sm="1" gutter="12px" row-height="3:3">
<mat-grid-tile *ngFor="let repo of repos">
<div class="row">
          <div class="col-md-9">
            <h4><a href="{{repo.html_url}}" target="_blank">{{repo.name}}</a></h4>
            <p>{{repo.description}}</p>
          </div>
          <div class="col-md-3">
            <span class="label label-default">{{repo.watchers}} Watchers</span>
            <span class="label label-primary">{{repo.forks}} Forks</span>
          </div>
          </div>
</mat-grid-tile>
</mat-grid-list>
  `
})
export class GithubResultComponent {
  @Input() user;
  @Input() repos;
}
