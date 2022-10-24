import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'result',
    templateUrl: 'result.component.html'
})
export class ResultComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    public valor1 = 1;
    public valor2 = 1;

    setValue(index: number, value: number) {
        if (index === 1)
            this.valor1 = value;
        else
            this.valor2 = value;
    }

    clear() {
        this.valor1 = 1;
        this.valor2 = 1;
    }
}