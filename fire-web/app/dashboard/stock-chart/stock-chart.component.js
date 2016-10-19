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
    var StockChartComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            StockChartComponent = class StockChartComponent {
                constructor(el) {
                    this.el = el.nativeElement;
                }
                ngAfterViewInit() {
                    var ctx = this.el.getElementsByTagName("canvas");
                    var config = {
                        type: 'pie',
                        data: {
                            labels: [
                                "CDN Bonds",
                                "CDN Index",
                                "International Index"
                            ],
                            datasets: [{
                                    data: [10, 25, 65],
                                    backgroundColor: [
                                        "#FF6384",
                                        "#36A2EB",
                                        "#FFCE56"
                                    ],
                                    hoverBackgroundColor: [
                                        "#FF6384",
                                        "#36A2EB",
                                        "#FFCE56"
                                    ]
                                }]
                        },
                        options: {
                            scales: {
                                yAxes: [{
                                        ticks: {
                                            beginAtZero: true
                                        }
                                    }]
                            },
                            responsive: true
                        },
                    };
                    this.stockChart = new Chart(ctx, config);
                }
            };
            StockChartComponent = __decorate([
                core_1.Component({
                    selector: "stock-chart-component",
                    templateUrl: "app/dashboard/stock-chart/stock-chart.componet.html"
                }), 
                __metadata('design:paramtypes', [core_1.ElementRef])
            ], StockChartComponent);
            exports_1("StockChartComponent", StockChartComponent);
        }
    }
});
//# sourceMappingURL=stock-chart.component.js.map