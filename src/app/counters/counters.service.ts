import { Injectable } from '@angular/core';

@Injectable()
export class CountersService {
    
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