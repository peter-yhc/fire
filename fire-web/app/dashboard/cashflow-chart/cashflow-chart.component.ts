import {Component, AfterViewInit, ElementRef} from "@angular/core";

declare var Chart:any;

@Component({
    selector: "cashflow-chart-component",
    templateUrl: "app/dashboard/cashflow-chart/cashflow-chart.component.html"
})
export class CashflowChartComponent implements AfterViewInit {

    private el;
    private cashflowChart;

    constructor(el:ElementRef) {
        this.el = el.nativeElement;
    }

    ngAfterViewInit():void {
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
}