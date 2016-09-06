import {Component, AfterViewInit} from "@angular/core";

declare var Handsontable: any;

@Component({
    templateUrl: 'app/expenses/expenses.component.html',
    styleUrls: ['app/expenses/expenses.component.css']
})
export class ExpensesComponent implements AfterViewInit {

    private data;
    private container;
    private hot;

    ngAfterViewInit() {
        this.data = [
            ["", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", ""],
        ];

        this.container = document.getElementById('example');
        this.hot = new Handsontable(this.container, {
            data: this.data,
            rowHeaderWidth: 150,
            rowHeaders: [
                'Mortgage / Rent',
                'Home Insurance',
                'Property Tax',
                'Health Insurance',
                'Food & Groceries',
                'Electric',
                'Natural Gas',
                'Cable & Internet',
                'Cell',
                'Trash',
                'Car Insurance',
                'Car Maintenance',
                'Car Purchase',
                'Car Petrol',
                'Home Repairs',
                'Pet',
                'Misc',
                'Total'
            ],
            colHeaders: [
                'Necessary', 'Expenses', 'Costs', 'Budget', 'Daily', 'Monthly', 'Annually', 'Savings', 'FI'
            ]
        });
    }
}