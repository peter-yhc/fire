import {Component, OnInit} from "@angular/core";
import {InvestmentAccountComponent} from "./account/investment-account.component";

@Component({
    templateUrl: "app/investments/investments.component.html",
    styleUrls: ["app/investments/investments.component.css"]
})
export class InvestmentsComponent implements OnInit {
    private accounts: Array<String>;

    ngOnInit(): void {
        this.accounts = ["TFSA", "Canadian Holdings"];
    }

}
