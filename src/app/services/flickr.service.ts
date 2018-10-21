import {
  Injectable,
  Inject
} from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { FlickrResult } from '../models/flickr-result';

@Injectable()
export class FlickrService {
  apiKey: string;
  apiUrl: string;
  constructor(public http: HttpClient) {
    this.apiKey = '8b361c6a99ea39b7aba4948236db0ea6';
    this.apiUrl = 'https://api.flickr.com/services/rest';
  }
  search(query: string): Observable<FlickrResult[]> {
    let params: string = [
      `tags=${query}`,
      `api_key=${this.apiKey}`,
      `method=flickr.photos.search`,
      `format=json`,
      `nojsoncallback=1`,
    ].join('&');
    let queryUrl: string = `${this.apiUrl}?${params}`;
    return this.http.get(queryUrl)
      .map((response: Response) => {
        return (<any>response).photos.photo.map(photo => {
          return new FlickrResult({
            id: photo.id,
            owner: photo.owner,
            secret: photo.secret,
            server: photo.server,
            title: photo.title,
            farm: photo.farm

          });
        });
      });
  }
}
