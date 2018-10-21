import { Component } from '@angular/core';
import { TimeService } from '../../services/time.service';

@Component({
  selector: 'app-current-time',
  template: `

<strong>{{time}}</strong>
`
})
export class CurrentTimeComponent {

  time: string;

  constructor(timeService: TimeService) {
    timeService.subscribe(time => this.time = time.toLocaleTimeString());
  }

}
