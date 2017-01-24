import {Component, Input} from "@angular/core";
import {SelectItem} from "primeng/components/common/api";
import {NetWorthProfile} from "../model/NetWorthProfile";

@Component({
    selector: "net-worth-profile-component",
    styleUrls: ["app/net-worth/net-worth-profile.component.css"],
    templateUrl: "app/net-worth/profile/net-worth-profile.component.html",
})
export class NetWorthProfileComponent {

    @Input() profile: NetWorthProfile;

    private rows;
    private columns;
    private previousColumns: any[];
    private columnIndices: string[];
    private columnOptions: SelectItem[];

    ngOnInit() {
        this.initialColumnSetup();

        this.columnOptions = [];
        this.columns.forEach(column => {
            this.columnOptions.push({label: column.headerName, value: column})
        })
    }

    private initialColumnSetup() {
        this.columns = [
            {headerName: "Month", field: "month"},
            {headerName: "Total", field: "total"},
            {headerName: "Savings", field: "savings"},
            {headerName: "Invested", field: "invested"},
            {headerName: "Home Equity", field: "homeEquity"},
            {headerName: "Debts", field: "debts"}
        ];
        this.columnIndices = ["Month", "Net Worth", "Liquid", "Invested", "Home Equity", "Income"];
        this.previousColumns = this.columns.slice();
    }

    multiselectChange(): void {
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