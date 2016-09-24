import {Component} from "@angular/core";

@Component({
    selector: "cashflow-chart-component",
    templateUrl: "app/dashboard/cashflow-chart/cashflow-chart.component.html"
})
export class CashflowChartComponent {
    data: any;

    constructor() {
        this.data = {
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
        }
    }
}