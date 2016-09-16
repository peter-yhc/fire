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
import {MonthComponent} from "./monthly-budgets/month.component";
import {NecessaryTotalComponent} from "./expenses/total/necessary-total.component";
import {DiscretionaryTotalComponent} from "./expenses/total/discretionary-total.component";
import {ExcessTotalComponent} from "./expenses/total/excess-total.component";
import {DataTableModule, SharedModule} from "primeng/primeng";
import {NecessaryMonthlyComponent} from "./expenses/monthly/necessary-monthly.component";
import {DateGeneratorService} from "./service/date-generator.service";
import {DiscretionaryMonthlyComponent} from "./expenses/monthly/discretionary-monthly.component";
import {ExcessMonthlyComponent} from "./expenses/monthly/excess-monthly.component";
import {TotalMonthlyComponent} from "./expenses/monthly/total-monthly.component";
import {IncomeBudgetComponent} from "./monthly-budgets/incoming/income-budget.component";
import {InvestmentBudgetComponent} from "./monthly-budgets/incoming/investment-budget.component";
import {NecessaryExpenseBudgetComponent} from "./monthly-budgets/outgoing/necessary-expense-budget.component";
import {DiscretionaryExpenseBudgetComponent} from "./monthly-budgets/outgoing/discretionary-expense-budget.component";
import {ExcessExpenseBudgetComponent} from "./monthly-budgets/outgoing/excess-expense-budget.component";
import {PayrollComponent} from "./monthly-budgets/incoming/payroll/payroll.component";
import {InvestmentAccountComponent} from "./investments/account/investment-account.component";

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
        TotalMonthlyComponent,
        NecessaryMonthlyComponent,
        DiscretionaryMonthlyComponent,
        ExcessMonthlyComponent,
        NetWorthComponent,
        InvestmentsComponent,
        InvestmentAccountComponent,
        MonthComponent,
        IncomeBudgetComponent,
        InvestmentBudgetComponent,
        NecessaryExpenseBudgetComponent,
        DiscretionaryExpenseBudgetComponent,
        ExcessExpenseBudgetComponent,
        PayrollComponent
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