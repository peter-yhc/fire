import {Component, ElementRef, AfterViewInit} from "@angular/core";

declare var Chart:any;

@Component({
    selector: "net-worth-chart-component",
    templateUrl: "app/dashboard/net-worth-chart/net-worth-chart.component.html",
})
export class NetWorthChartComponent implements AfterViewInit {

    private myChart;
    private el;

    constructor(el:ElementRef) {
        this.el = el.nativeElement;
    }

    ngAfterViewInit():void {
        var ctx = this.el.getElementsByTagName("canvas");
        var config = {
            type: 'bar',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
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
                    ],
                    borderWidth: 1
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
        this.myChart = new Chart(ctx, config);
    }
}