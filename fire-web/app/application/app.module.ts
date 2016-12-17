import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {routing, appRoutingProviders} from "./app.routing";
import {NavbarComponent} from "./navbar/navbar.component";
import {DataTableModule, SharedModule} from "primeng/primeng";
import {DateGeneratorService} from "./service/date-generator.service";
import {ExpensesModule} from "../analyze/analyze.module";
import {MonthModule} from "../monthly-budgets/month.module";
import {InvestmentsModule} from "../investments/investments.module";
import {DashboardModule} from "../dashboard/dashboard.module";
import {NetWorthModule} from "../net-worth/net-worth.module";
import {InstructionsModule} from "../instructions/instructions.module";
import {HomeModule} from "../home/home.module";

@NgModule({
    imports: [
        // System Modules
        BrowserModule,
        routing,
        DataTableModule,
        SharedModule,

        // Application Modules
        DashboardModule,
        ExpensesModule,
        HomeModule,
        InstructionsModule,
        InvestmentsModule,
        MonthModule,
        NetWorthModule
    ],
    declarations: [
        AppComponent,
        NavbarComponent
    ],
    providers: [
        appRoutingProviders,
        DateGeneratorService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
