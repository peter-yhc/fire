import {NgModule} from "@angular/core";
import {DataTableModule} from "primeng/components/datatable/datatable";
import {SharedModule} from "primeng/components/common/shared";
import {InvestmentsComponent} from "./investments.component";
import {InvestmentAccountComponent} from "./account/investment-account.component";
import {InvestmentSummaryComponent} from "./summary/investment-summary.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule, DataTableModule, SharedModule, FormsModule
    ],
    declarations: [
        InvestmentsComponent,
        InvestmentAccountComponent,
        InvestmentSummaryComponent,
    ]
})
export class InvestmentsModule {

}
