System.register(["@angular/core"], function(exports_1, context_1) {
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
    var core_1;
    var CashflowChartComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CashflowChartComponent = class CashflowChartComponent {
                constructor(el) {
                    this.el = el.nativeElement;
                }
                ngAfterViewInit() {
                    var ctx = this.el.getElementsByTagName("canvas");
                    var config = {
                        type: "line",
                        data: {
                            labels: ["03/2016", "04/2016", "05/2016", "06/2016", "07/2016", "08/2016", "09/2016", "10/2016", "11/2016", "12/2016"],
                            datasets: [
                                {
                                    label: "Income",
                                    data: [4000, 4000, 4000, 4000, 4000, 4000, 4000],
                                    backgroundColor: [
                                        'rgba(255, 159, 64, 0.2)'
                                    ]
                                },
                                {
                                    label: "Expenses",
                                    data: [1235, 1357, 1168, 1623, 1139, 1586, 1431],
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.2)'
                                    ]
                                }
                            ]
                        },
                        options: {
                            scales: {
                                yAxes: [{
                                        ticks: {
                                            beginAtZero: true,
                                            max: 5000
                                        }
                                    }]
                            },
                            responsive: true
                        },
                    };
                    this.cashflowChart = new Chart(ctx, config);
                }
            };
            CashflowChartComponent = __decorate([
                core_1.Component({
                    selector: "cashflow-chart-component",
                    templateUrl: "app/dashboard/cashflow-chart/cashflow-chart.component.html"
                }), 
                __metadata('design:paramtypes', [core_1.ElementRef])
            ], CashflowChartComponent);
            exports_1("CashflowChartComponent", CashflowChartComponent);
        }
    }
});
//# sourceMappingURL=cashflow-chart.component.js.map