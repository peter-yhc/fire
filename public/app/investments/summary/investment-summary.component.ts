import {Component, OnInit} from "@angular/core";

@Component({
    selector: "investment-summary-component",
    templateUrl: "app/investments/summary/investment-summary.component.html"
})
export class InvestmentSummaryComponent implements OnInit {
    private rowData;
    private columnDefs;

    ngOnInit(): void {

        this.columnDefs = [
            {headerName: "Allocation Type", field: "allocationType"},
            {headerName: "Value", field: "value"}
        ];

        this.rowData = [
            {allocationType: "Total", value: "$120000"},
            {allocationType: "CA Stock", value: "40000"},
            {allocationType: "US Stock", value: "70000"},
            {allocationType: "Bonds", value: "10000"},
            {allocationType: "Total Fees", value: "500"},
            {allocationType: "Average Management Fee", value: "0.12%"},
        ];
    }
}