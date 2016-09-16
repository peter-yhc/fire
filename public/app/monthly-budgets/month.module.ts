import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {DataTableModule} from "primeng/components/datatable/datatable";
import {SharedModule} from "primeng/components/common/shared";
import {MonthComponent} from "./month.component";
import {IncomeBudgetComponent} from "./incoming/income-budget.component";
import {InvestmentBudgetComponent} from "./incoming/investment-budget.component";
import {NecessaryExpenseBudgetComponent} from "./outgoing/necessary-expense-budget.component";
import {DiscretionaryExpenseBudgetComponent} from "./outgoing/discretionary-expense-budget.component";
import {ExcessExpenseBudgetComponent} from "./outgoing/excess-expense-budget.component";
import {PayrollComponent} from "./incoming/payroll/payroll.component";

@NgModule({
    imports: [
        BrowserModule, DataTableModule, SharedModule
    ],
    declarations: [
        MonthComponent,
        IncomeBudgetComponent,
        InvestmentBudgetComponent,
        NecessaryExpenseBudgetComponent,
        DiscretionaryExpenseBudgetComponent,
        ExcessExpenseBudgetComponent,
        PayrollComponent
    ]
})
export class MonthModule {

}