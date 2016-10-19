import {Component, ElementRef, AfterViewInit} from "@angular/core";

declare var Chart:any;

@Component({
    selector: "mortgage-chart-component",
    templateUrl: "app/dashboard/mortgage-chart/mortgage-chart.component.html"
})
export class MortgageChartComponent implements AfterViewInit {

    private el;
    private mortgageChart;

    constructor(el:ElementRef) {
        this.el = el.nativeElement;
    }

    ngAfterViewInit():void {
        var ctx = this.el.getElementsByTagName("canvas");
        var config = {
            type: 'bar',
            data: {
                labels: ["03/2016", "04/2016", "05/2016", "06/2016", "07/2016", "08/2016", "09/2016", "10/2016", "11/2016", "12/2016"],
                datasets: [
                    {
                        type: "bar",
                        label: "Loan Balance",
                        data: [150, 140, 130, 120, 110, 100],
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
                        type: "bar",
                        label: "Equity",
                        data: [20, 24, 30, 32, 36, 44]
                    }

                ]
            }
        };
        this.mortgageChart = new Chart(ctx, config);
    }
}