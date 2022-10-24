import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'timer',
    templateUrl: 'timer.html',
    styles: [``],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Timer implements OnInit {

    ngOnInit() {
        this.startClock();
    }

    private value: number = 0;
    getValue() {
        return this.value;
    }

    startClock() {
        setInterval(() => this.value++, 1000);
    }

}