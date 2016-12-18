import {Component, OnInit} from "@angular/core";
import {InvestmentsService} from "./investments.service";
import {StockAccount} from "./model/StockAccount";

@Component({
    templateUrl: "app/investments/investments.component.html",
    styleUrls: ["app/investments/investments.component.css"],
    providers: [
        InvestmentsService
    ]
})
export class InvestmentsComponent implements OnInit {

    private stockAccounts:Array<StockAccount>;

    constructor(private investmentsService:InvestmentsService) {
    }

    ngOnInit():void {
        this.investmentsService.get().subscribe(
            investmentData => {
                this.stockAccounts = investmentData.accounts;
            }
        )
    }

}
