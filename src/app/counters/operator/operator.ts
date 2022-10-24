import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CountersService } from '../counters.service';

@Component({
    selector: 'operator',
    template: `
        <button (click)="sumar()">Sumar</button>
        &nbsp;
        <suboperador></suboperador>`
})

export class OperatorComponent implements OnInit {

    constructor(
        public countersService: CountersService,
    ) { }

    ngOnInit() { }

    sumar() {
        this.countersService.increaseValue1();
    }
}