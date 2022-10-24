import { Component, OnInit } from '@angular/core';
import { CountersService } from '../counters.service';

@Component({
    selector: 'result',
    templateUrl: 'result.component.html'
})
export class ResultComponent implements OnInit {

    constructor(
        public countersService: CountersService,
    ) { }

    ngOnInit() { }

}