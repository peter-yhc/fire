import {Component, OnInit} from "@angular/core";

@Component({
    templateUrl: "app/net-worth/net-worth.component.html",
    styleUrls: ["app/net-worth/net-worth.component.css"]

})
export class NetWorthComponent implements OnInit {
    private rowData;
    private columnDefs;

    ngOnInit() {
        this.columnDefs = [
            {headerName: "Account", field: "account"},
            {headerName: "Jan 2016", field: "month1"},
            {headerName: "Feb 2016", field: "month2"},
            {headerName: "Mar 2016", field: "month3"},
            {headerName: "Apr 2016", field: "month4"},
            {headerName: "May 2016", field: "month5"},
            {headerName: "Jun 2016", field: "month6"},
            {headerName: "Jul 2016", field: "month7"},
            {headerName: "Aug 2016", field: "month8"},
            {headerName: "Sep 2016", field: "month9"},
            {headerName: "Oct 2016", field: "month10"},
            {headerName: "Nov 2016", field: "month11"},
            {headerName: "Dec 2016", field: "month12"}
        ];

        this.rowData = [
            {account: "Liquid", month1: 10000, month2: 10000, month3: 10000, month4: 10000, month5: 10000, month6: 10000, month7: 10000, month8: 10000, month9: 10000, month10: 10000, month11: 10000, month12: 10000},
            {account: "Income", month1: 10000, month2: 10000, month3: 10000, month4: 10000, month5: 10000, month6: 10000, month7: 10000, month8: 10000, month9: 10000, month10: 10000, month11: 10000, month12: 10000},
            {account: "Expenses", month1: 10000, month2: 10000, month3: 10000, month4: 10000, month5: 10000, month6: 10000, month7: 10000, month8: 10000, month9: 10000, month10: 10000, month11: 10000, month12: 10000},
            {account: "Invest1", month1: 10000, month2: 10000, month3: 10000, month4: 10000, month5: 10000, month6: 10000, month7: 10000, month8: 10000, month9: 10000, month10: 10000, month11: 10000, month12: 10000},
            {account: "Invest2", month1: 10000, month2: 10000, month3: 10000, month4: 10000, month5: 10000, month6: 10000, month7: 10000, month8: 10000, month9: 10000, month10: 10000, month11: 10000, month12: 10000},
            {account: "Equity1", month1: 10000, month2: 10000, month3: 10000, month4: 10000, month5: 10000, month6: 10000, month7: 10000, month8: 10000, month9: 10000, month10: 10000, month11: 10000, month12: 10000},
            {account: "Debt1", month1: 10000, month2: 10000, month3: 10000, month4: 10000, month5: 10000, month6: 10000, month7: 10000, month8: 10000, month9: 10000, month10: 10000, month11: 10000, month12: 10000},
            {account: "Net Worth", month1: 10000, month2: 10000, month3: 10000, month4: 10000, month5: 10000, month6: 10000, month7: 10000, month8: 10000, month9: 10000, month10: 10000, month11: 10000, month12: 10000},
        ];
    }
}