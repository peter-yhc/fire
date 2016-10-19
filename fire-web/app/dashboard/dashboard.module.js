System.register(["@angular/core", "./dashboard.component", "primeng/components/chart/chart", "./countdown-chart/countdown-chart.component", "./cashflow-chart/cashflow-chart.component", "./net-worth-chart/net-worth-chart.component", "./saving-rate/saving-rate.component", "./saving-total/saving-total.component", "./stock-chart/stock-chart.component", "./mortgage-chart/mortgage-chart.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, dashboard_component_1, chart_1, countdown_chart_component_1, cashflow_chart_component_1, net_worth_chart_component_1, saving_rate_component_1, saving_total_component_1, stock_chart_component_1, mortgage_chart_component_1;
    var DashboardModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (chart_1_1) {
                chart_1 = chart_1_1;
            },
            function (countdown_chart_component_1_1) {
                countdown_chart_component_1 = countdown_chart_component_1_1;
            },
            function (cashflow_chart_component_1_1) {
                cashflow_chart_component_1 = cashflow_chart_component_1_1;
            },
            function (net_worth_chart_component_1_1) {
                net_worth_chart_component_1 = net_worth_chart_component_1_1;
            },
            function (saving_rate_component_1_1) {
                saving_rate_component_1 = saving_rate_component_1_1;
            },
            function (saving_total_component_1_1) {
                saving_total_component_1 = saving_total_component_1_1;
            },
            function (stock_chart_component_1_1) {
                stock_chart_component_1 = stock_chart_component_1_1;
            },
            function (mortgage_chart_component_1_1) {
                mortgage_chart_component_1 = mortgage_chart_component_1_1;
            }],
        execute: function() {
            DashboardModule = class DashboardModule {
            };
            DashboardModule = __decorate([
                core_1.NgModule({
                    imports: [
                        chart_1.ChartModule
                    ],
                    declarations: [
                        countdown_chart_component_1.CountdownChartComponent,
                        cashflow_chart_component_1.CashflowChartComponent,
                        dashboard_component_1.DashboardComponent,
                        net_worth_chart_component_1.NetWorthChartComponent,
                        mortgage_chart_component_1.MortgageChartComponent,
                        saving_rate_component_1.SavingRateComponent,
                        saving_total_component_1.SavingTotalComponent,
                        stock_chart_component_1.StockChartComponent
                    ]
                }), 
                __metadata('design:paramtypes', [])
            ], DashboardModule);
            exports_1("DashboardModule", DashboardModule);
        }
    }
});
//# sourceMappingURL=dashboard.module.js.map