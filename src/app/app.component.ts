import { Component } from '@angular/core';
import { CountersService } from './counters/counters.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [ CountersService ]
})
export class AppComponent {
  title = 'froged-test';

    public feature = 'timer';

}
