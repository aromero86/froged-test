import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountersComponent } from './counters/counters';
import { OperatorComponent } from './counters/operator/operator';
import { SuboperatorComponent } from './counters/operator/suboperator/suboperator';
import { ResultComponent } from './counters/result/result';
import { Timer } from './timer/timer';

@NgModule({
    declarations: [
        AppComponent,
        Timer,
        CountersComponent,
        OperatorComponent,
        SuboperatorComponent,
        ResultComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
