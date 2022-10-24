import { Component, OnInit } from '@angular/core';
import { CountersService } from './counters.service';

@Component({
    selector: 'counters',
    template: `<div style="text-align: center;">
                    <result #result></result>
                    <br>
                    <br>
                    <operator></operator>
                    &nbsp;
                    <button (click)="countersService.clear()">Clear</button>
                </div>`
})
export class CountersComponent implements OnInit {

    constructor(
        public countersService: CountersService,
    ) { }

    ngOnInit() { }
}