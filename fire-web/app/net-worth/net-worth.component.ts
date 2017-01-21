import {Component, OnInit} from "@angular/core";
import {SelectItem} from "primeng/primeng";

@Component({
    templateUrl: "app/net-worth/net-worth.component.html",
    styleUrls: ["app/net-worth/net-worth.component.css"],
})
export class NetWorthComponent implements OnInit {
    private rowData;
    private columnDefs;
    private columnOptions:SelectItem[];

    ngOnInit() {
        this.columnDefs = [
            {headerName: "Month", field: "month"},
            {headerName: "Net Worth", field: "netWorth"},
            {headerName: "Liquid", field: "liquid"},
            {headerName: "Invested", field: "invested"},
            {headerName: "Home Equity", field: "homeEquity"},
            {headerName: "Income", field: "income"}
        ];

        this.rowData = [
            {
                month: "2016-01",
                netWorth: 12302.21,
                "liquid": 8454.23,
                "invested": 64972,
                "homeEquity": 3522,
                "income": 23432
            },
            {
                month: "2016-02",
                netWorth: 12302.21,
                "liquid": 8454.23,
                "invested": 64972,
                "homeEquity": 3522,
                "income": 23432
            },
            {
                month: "2016-03",
                netWorth: 12302.21,
                "liquid": 8454.23,
                "invested": 64972,
                "homeEquity": 3522,
                "income": 23432
            },
            {
                month: "2016-04",
                netWorth: 12302.21,
                "liquid": 8454.23,
                "invested": 64972,
                "homeEquity": 3522,
                "income": 23432
            },
            {
                month: "2016-05",
                netWorth: 12302.21,
                "liquid": 8454.23,
                "invested": 64972,
                "homeEquity": 3522,
                "income": 23432
            },
        ];

        this.columnOptions = [];
        for (let i = 0; i < this.columnDefs.length; i++) {
            this.columnOptions.push({label: this.columnDefs[i].headerName, value: this.columnDefs[i]});
        }
    }
}