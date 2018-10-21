import {
  Component, Input,
} from '@angular/core';
import {GiphyResult} from '../../models/giphy-result';

@Component({
  selector: 'app-giphy-result',
  template: `
   <div class="col-sm-6 col-md-3">
        <img class="img-responsive img-thumbnail" src="{{result.image}}">
    </div>
  `
})
export class GiphyResultComponent {
  @Input() result: GiphyResult;
}
