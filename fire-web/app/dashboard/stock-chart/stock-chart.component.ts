import {Component, AfterViewInit, ElementRef} from "@angular/core";

declare var Chart:any;

@Component({
    selector: "stock-chart-component",
    templateUrl: "app/dashboard/stock-chart/stock-chart.componet.html"
})
export class StockChartComponent implements AfterViewInit {

    private el;
    private stockChart;

    constructor(el:ElementRef) {
        this.el = el.nativeElement;
    }

    ngAfterViewInit():void {
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

}