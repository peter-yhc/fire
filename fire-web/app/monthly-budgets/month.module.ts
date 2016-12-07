import {NgModule} from "@angular/core";
import {DataTableModule} from "primeng/components/datatable/datatable";
import {SharedModule} from "primeng/components/common/shared";
import {MonthComponent} from "./month.component";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {MonthlyIncomeComponent} from "./income/monthly-income.component";
import {MonthlyExpenseComponent} from "./expense/monthly-expense.component";

@NgModule({
    imports: [
        CommonModule, DataTableModule, SharedModule, HttpModule
    ],
    declarations: [
        MonthComponent,
        MonthlyIncomeComponent,
        MonthlyExpenseComponent
    ]
})
export class MonthModule {

}
