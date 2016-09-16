import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {DataTableModule} from "primeng/components/datatable/datatable";
import {SharedModule} from "primeng/components/common/shared";
import {InvestmentsComponent} from "./investments.component";
import {InvestmentAccountComponent} from "./account/investment-account.component";

@NgModule({
    imports: [
        BrowserModule, DataTableModule, SharedModule,
    ],
    declarations: [
        InvestmentsComponent,
        InvestmentAccountComponent
    ]
})
export class InvestmentsModule {

}