import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'suboperador',
    template: `<button (click)="multiplicar.emit()">Multiplicar</button>`
})
export class SuboperatorComponent implements OnInit {

    @Output() multiplicar = new EventEmitter()

    constructor() { }

    ngOnInit() { }
}