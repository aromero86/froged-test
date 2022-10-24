import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'operator',
    template: `<button (click)="sumar.emit()">Sumar</button> &nbsp; <suboperador (multiplicar)="multiplicar.emit()"></suboperador>`
})

export class OperatorComponent implements OnInit {

    @Output() sumar = new EventEmitter();
    @Output() multiplicar = new EventEmitter();

    constructor() { }

    ngOnInit() { }
}