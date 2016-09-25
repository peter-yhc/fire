import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard.component";
import {ChartModule} from "primeng/components/chart/chart";
import {CountdownChartComponent} from "./countdown-chart/countdown-chart.component";
import {CashflowChartComponent} from "./cashflow-chart/cashflow-chart.component";
import {NetWorthChartComponent} from "./net-worth-chart/net-worth-chart.component";
import {SavingRateComponent} from "./saving-rate/saving-rate.component";
import {SavingTotalComponent} from "./saving-total/saving-total.component";
import {StockChartComponent} from "./stock-chart/stock-chart.component";

@NgModule({
    imports: [
        ChartModule
    ],
    declarations: [
        DashboardComponent,
        CountdownChartComponent,
        CashflowChartComponent,
        SavingRateComponent,
        SavingTotalComponent,
        NetWorthChartComponent,
        StockChartComponent
    ]
})
export class DashboardModule {

}