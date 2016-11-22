import {NgModule} from "@angular/core";
import {DataTableModule} from "primeng/components/datatable/datatable";
import {SharedModule} from "primeng/components/common/shared";
import {MonthComponent} from "./month.component";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {IncomeBudgetComponent} from "./income/income.component";
import {NecessaryExpenseBudgetComponent} from "./expense/necessary-expense-budget.component";
import {DiscretionaryExpenseBudgetComponent} from "./expense/discretionary-expense-budget.component";
import {ExcessExpenseBudgetComponent} from "./expense/excess-expense-budget.component";

@NgModule({
    imports: [
        CommonModule, DataTableModule, SharedModule, HttpModule
    ],
    declarations: [
        MonthComponent,
        IncomeBudgetComponent,
        NecessaryExpenseBudgetComponent,
        DiscretionaryExpenseBudgetComponent,
        ExcessExpenseBudgetComponent,
    ]
})
export class MonthModule {

}
