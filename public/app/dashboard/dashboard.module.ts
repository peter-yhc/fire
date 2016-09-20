import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard.component";
import {ChartModule} from "primeng/components/chart/chart";
import {CountdownComponent} from "./countdown/countdown.component";
import {CashFlowComponent} from "./cash-flow/cash-flow.component";
import {SavingStatisticsComponent} from "./statistics/saving-statistics.component";

@NgModule({
    imports: [
        ChartModule
    ],
    declarations: [
        DashboardComponent,
        CountdownComponent,
        CashFlowComponent,
        SavingStatisticsComponent
    ]
})
export class DashboardModule {

}