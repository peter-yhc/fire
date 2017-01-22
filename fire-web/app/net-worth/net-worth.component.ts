import {Component, OnInit} from "@angular/core";
import {SelectItem} from "primeng/primeng";

@Component({
    templateUrl: "app/net-worth/net-worth.component.html",
    styleUrls: ["app/net-worth/net-worth.component.css"],
})
export class NetWorthComponent implements OnInit {

    private rowData;
    private columns;
    private previousColumns:any[];
    private columnIndices:string[];
    private columnOptions:SelectItem[];

    ngOnInit() {
        this.initialColumnSetup();

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
        this.columns.forEach(column => {
            this.columnOptions.push({label: column.headerName, value: column})
        })
    }

    private initialColumnSetup() {
        this.columns = [
            {headerName: "Month", field: "month"},
            {headerName: "Net Worth", field: "netWorth"},
            {headerName: "Liquid", field: "liquid"},
            {headerName: "Invested", field: "invested"},
            {headerName: "Home Equity", field: "homeEquity"},
            {headerName: "Income", field: "income"}
        ];
        this.columnIndices = ["Month", "Net Worth", "Liquid", "Invested", "Home Equity", "Income"];
        this.previousColumns = this.columns.slice();
    }

    multiselectChange():void {
        if (this.columns.length > this.previousColumns.length) {
            let addedColumn = this.intersect(this.columns, this.previousColumns)[0];
            let originalPosition = this.columnIndices.indexOf(addedColumn.headerName);

            var splice = this.columns.splice(this.columns.length - 1, 1); // remove from default end of array
            this.columns.splice(originalPosition, 0, splice[0]); // reintroduce to original position
        }
        this.previousColumns = this.columns.slice();
    }

    private intersect(a, b) {
        let t;
        if (b.length > a.length) {
            t = b;
            b = a;
            a = t;
        }
        return a.filter(function (e) {
            if (b.indexOf(e) == -1) return true;
        });
    }
}