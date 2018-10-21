import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';


@Injectable()
export class GithubService{
  private client_id = '2a4f3654384a273b41ef';
  private client_secret = '47c933a5dc7d586aecf9bc58472c4467551c40e4';
 combined;
  constructor(private http: HttpClient){
  }

  getUser(username) {
    return this.http.get('https://api.github.com/users/' + username + '?client_id=' + this.client_id + '' +
      '&client_secret=' + this.client_secret)
  }

  getRepos(username) {
    return this.http.get('https://api.github.com/users/' + username + '/repos?client_id=' + this.client_id +
      '&client_secret=' + this.client_secret)
  }

  search(term){
    let user = this.getUser(term);
    let repos = this.getRepos(term);
   return forkJoin([user, repos]).subscribe((results) => {
     return results;
   });
  }

}
