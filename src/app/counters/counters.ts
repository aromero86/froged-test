import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'counters',
    template: `<div style="text-align: center;">
                    <result #result></result>
                    <br>
                    <br>
                    <operator
                        (multiplicar)="result.setValue(2, result.valor1 * result.valor2)"
                        (sumar)="result.setValue(1, result.valor1+1)"
                    ></operator>
                    &nbsp;
                    <button (click)="result.clear()">Clear</button>
                </div>`
})
export class CountersComponent implements OnInit {

    constructor() { }

    public valor = 0;

    ngOnInit() { }
}