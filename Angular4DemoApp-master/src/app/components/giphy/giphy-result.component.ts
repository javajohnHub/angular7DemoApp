import {
  Component, Input,
} from '@angular/core';
import {GiphyResult} from '../../models/giphy-result';

@Component({
  selector: 'app-giphy-result',
  template: `
   <div class="col-sm-6 col-md-3">
        <img class="img-responsive img-thumbnail" src="{{result.image}}">
        <div class="caption">
          <h3>Rating: {{result.rating}}</h3>
          <p>Submitted by: {{result.username}}</p>
          <p>Submitted: {{result.import_datetime}}</p>
          <p>Trending: {{result.trending_datetime}}</p>
        </div>
    </div>
  `
})
export class GiphyResultComponent {
  @Input() result: GiphyResult;
}
