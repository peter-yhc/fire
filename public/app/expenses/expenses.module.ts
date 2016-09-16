import {NgModule} from "@angular/core";
import {ExpensesComponent} from "./expenses.component";
import {NecessaryTotalComponent} from "./total/necessary-total.component";
import {DiscretionaryTotalComponent} from "./total/discretionary-total.component";
import {ExcessTotalComponent} from "./total/excess-total.component";
import {TotalMonthlyComponent} from "./monthly/total-monthly.component";
import {NecessaryMonthlyComponent} from "./monthly/necessary-monthly.component";
import {DiscretionaryMonthlyComponent} from "./monthly/discretionary-monthly.component";
import {ExcessMonthlyComponent} from "./monthly/excess-monthly.component";
import {DataTableModule} from "primeng/components/datatable/datatable";
import {SharedModule} from "primeng/components/common/shared";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
    imports: [
        BrowserModule, DataTableModule, SharedModule
    ],
    declarations: [
        ExpensesComponent,
        NecessaryTotalComponent,
        DiscretionaryTotalComponent,
        ExcessTotalComponent,
        TotalMonthlyComponent,
        NecessaryMonthlyComponent,
        DiscretionaryMonthlyComponent,
        ExcessMonthlyComponent
    ]
})
export class ExpensesModule {

}