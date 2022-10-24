import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CountersService } from '../../counters.service';

@Component({
    selector: 'suboperador',
    template: `<button (click)="multiplicar()">Multiplicar</button>`,
})
export class SuboperatorComponent implements OnInit {

    constructor(
        public countersService: CountersService,
    ) { }

    ngOnInit() { }

    multiplicar(): void {
        this.countersService.multiply();
    }

}