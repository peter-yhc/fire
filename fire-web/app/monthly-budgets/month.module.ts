import {NgModule} from "@angular/core";
import {DataTableModule} from "primeng/components/datatable/datatable";
import {SharedModule} from "primeng/components/common/shared";
import {MonthComponent} from "./month.component";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {IncomeBudgetComponent} from "./income/income-budget.component";
import {ExpenseBudgetComponent} from "./expense/expense-budget.component";

@NgModule({
    imports: [
        CommonModule, DataTableModule, SharedModule, HttpModule
    ],
    declarations: [
        MonthComponent,
        IncomeBudgetComponent,
        ExpenseBudgetComponent
    ]
})
export class MonthModule {

}
