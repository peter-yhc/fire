import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {routing, appRoutingProviders} from './app.routing';
import {NavbarComponent} from "./navbar/navbar.component";
import {HomeComponent} from "./home/home.component";
import {InstructionsComponent} from './instructions/instructions.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ExpensesComponent} from "./expenses/expenses.component";
import {NetWorthComponent} from "./net-worth/net-worth.component";
import {InvestmentsComponent} from "./investments/investments.component";
import {MonthComponent} from "./month/month.component";

@NgModule({
    imports: [
        BrowserModule, routing
    ],
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        InstructionsComponent,
        DashboardComponent,
        ExpensesComponent,
        NetWorthComponent,
        InvestmentsComponent,
        MonthComponent
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [AppComponent
    ]
})
export class AppModule {
}