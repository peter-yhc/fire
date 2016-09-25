import {Component, AfterViewInit, ElementRef} from "@angular/core";

declare var Chart:any;

@Component({
    selector: "cashflow-chart-component",
    templateUrl: "app/dashboard/cashflow-chart/cashflow-chart.component.html"
})
export class CashflowChartComponent implements AfterViewInit{

    private el;
    private cashflowChart;

    constructor(el: ElementRef) {
        this.el = el.nativeElement;
    }

    ngAfterViewInit():void {
        var ctx = this.el.getElementsByTagName("canvas");
        var config = {
            type: 'bar',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'First Dataset',
                        data: [65, 59, 80, 81, 56, 55, 40]
                    },
                    {
                        label: 'Second Dataset',
                        data: [28, 48, 40, 19, 86, 27, 90]
                    }
                ]
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
        this.cashflowChart = new Chart(ctx, config);
    }
}