import {
  Component, Input,
} from '@angular/core';
import {FlickrResult} from '../../models/flickr-result';

@Component({
  selector: 'app-flickr-result',
  template: `
   <div class="col-sm-6 col-md-3">
     <div class="thumbnail">
        <img src="https://farm{{result.farm}}.staticflickr.com/{{result.server}}/{{result.id}}_{{result.secret}}.jpg">
        <div class="caption">
          {{result.title}}
        </div>
      </div>
    </div>`
})
export class FlickrResultComponent {
  @Input() result: FlickrResult;
}
