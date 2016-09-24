import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard.component";
import {ChartModule} from "primeng/components/chart/chart";
import {CountdownChartComponent} from "./countdown-chart/countdown-chart.component";
import {CashflowChartComponent} from "./cashflow-chart/cashflow-chart.component";
import {SavingStatisticsComponent} from "./statistics/saving-statistics.component";

@NgModule({
    imports: [
        ChartModule
    ],
    declarations: [
        DashboardComponent,
        CountdownChartComponent,
        CashflowChartComponent,
        SavingStatisticsComponent
    ]
})
export class DashboardModule {

}