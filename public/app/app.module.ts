import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {routing, appRoutingProviders} from "./app.routing";
import {NavbarComponent} from "./navbar/navbar.component";
import {HomeComponent} from "./home/home.component";
import {InstructionsComponent} from "./instructions/instructions.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ExpensesComponent} from "./expenses/expenses.component";
import {NetWorthComponent} from "./net-worth/net-worth.component";
import {InvestmentsComponent} from "./investments/investments.component";
import {MonthComponent} from "./month/month.component";
import {NecessaryTotalComponent} from "./expenses/total/necessary-total/necessary-total.component";
import {DiscretionaryTotalComponent} from "./expenses/total/discretionary-total/discretionary-total.component";
import {ExcessTotalComponent} from "./expenses/total/excess-total/excess-total.component";
import {DataTableModule, SharedModule} from "primeng/primeng";
import {NecessaryMonthlyComponent} from "./expenses/monthly/necessary-monthly/necessary-monthly.component";
import {DateGeneratorService} from "./service/date-generator.service";
import {DiscretionaryMonthlyComponent} from "./expenses/monthly/discretionary-monthly/discretionary-monthly.component";
import {ExcessMonthlyComponent} from "./expenses/monthly/excess-monthly/excess-monthly.component";

@NgModule({
    imports: [
        BrowserModule, routing, DataTableModule, SharedModule
    ],
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        InstructionsComponent,
        DashboardComponent,
        ExpensesComponent,
        NecessaryTotalComponent,
        DiscretionaryTotalComponent,
        ExcessTotalComponent,
        NecessaryMonthlyComponent,
        DiscretionaryMonthlyComponent,
        ExcessMonthlyComponent,
        NetWorthComponent,
        InvestmentsComponent,
        MonthComponent
    ],
    providers: [
        appRoutingProviders,
        DateGeneratorService
    ],
    bootstrap: [AppComponent
    ]
})
export class AppModule {
}