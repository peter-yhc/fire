import {Component, OnInit, Input, OnChanges, SimpleChanges} from "@angular/core";
import {Investment} from "../model/Investment";

@Component({
    selector: "investment-summary-component",
    templateUrl: "app/investments/summary/investment-summary.component.html"
})
export class InvestmentSummaryComponent implements OnChanges {

    private rowData;
    private columnDefs;

    @Input() investment: Investment;

    constructor() {
        this.columnDefs = [
            {headerName: "Allocation Type", field: "allocationType"},
            {headerName: "Value", field: "value"}
        ];
    }

    ngOnChanges():void {
        let marketValue = this.calculateTotals("marketValue");
        let bookValue = this.calculateTotals("bookValue");
        let gains = (marketValue - bookValue) / bookValue;
        this.rowData = [
            {allocationType: "Market Value", value: marketValue},
            {allocationType: "Book Value", value: bookValue},
            {allocationType: "Gains", value: gains},
        ];
    }

    calculateTotals(field):number {
        let total = 0;
        this.investment.accounts.forEach(account => {
            account.stocks.forEach(stock => {
                total += stock[field]
            })
        });
        return parseFloat(total.toFixed(2));
    }
}