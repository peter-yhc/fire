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
    var NetWorthChartComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NetWorthChartComponent = class NetWorthChartComponent {
                constructor(el) {
                    this.el = el.nativeElement;
                }
                ngAfterViewInit() {
                    var ctx = this.el.getElementsByTagName("canvas");
                    var config = {
                        type: 'bar',
                        data: {
                            labels: ["03/2016", "04/2016", "05/2016", "06/2016", "07/2016", "08/2016", "09/2016", "10/2016", "11/2016", "12/2016"],
                            datasets: [
                                {
                                    type: "bar",
                                    label: "Total Assets",
                                    data: [35, 40, 45, 50, 55, 60, 65],
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.2)',
                                        'rgba(54, 162, 235, 0.2)',
                                        'rgba(255, 206, 86, 0.2)',
                                        'rgba(75, 192, 192, 0.2)',
                                        'rgba(153, 102, 255, 0.2)',
                                        'rgba(255, 159, 64, 0.2)'
                                    ],
                                    borderColor: [
                                        'rgba(255,99,132,1)',
                                        'rgba(54, 162, 235, 1)',
                                        'rgba(255, 206, 86, 1)',
                                        'rgba(75, 192, 192, 1)',
                                        'rgba(153, 102, 255, 1)',
                                        'rgba(255, 159, 64, 1)'
                                    ]
                                },
                                {
                                    type: "line",
                                    label: "Liquid Assets",
                                    data: [20, 24, 30, 32, 36, 44, 45]
                                }
                            ]
                        }
                    };
                    this.myChart = new Chart(ctx, config);
                }
            };
            NetWorthChartComponent = __decorate([
                core_1.Component({
                    selector: "net-worth-chart-component",
                    templateUrl: "app/dashboard/net-worth-chart/net-worth-chart.component.html",
                }), 
                __metadata('design:paramtypes', [core_1.ElementRef])
            ], NetWorthChartComponent);
            exports_1("NetWorthChartComponent", NetWorthChartComponent);
        }
    }
});
//# sourceMappingURL=net-worth-chart.component.js.map