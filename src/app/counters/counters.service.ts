import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable()
export class CountersService {

    private valor1 = new BehaviorSubject(1);
    public valor1$ = this.valor1.asObservable();
    private valor2 = new BehaviorSubject(1);
    public valor2$ = this.valor2.asObservable();

    public valorSumado$ = this.valor1$.pipe(map(() => {
        return this.valor1.value + this.valor2.value;
    }));

    increaseValue1() {
        this.valor1.next(this.valor1.value + 1);
    }

    multiply() {
        this.valor2.next(this.valor1.value * this.valor2.value);
    }

    clear() {
        this.valor1.next(1);
        this.valor2.next(1);
    }

}