import {Component, OnInit, OnChanges} from "@angular/core";
import {InvestmentsService} from "./investments.service";

@Component({
    templateUrl: "app/investments/investments.component.html",
    styleUrls: ["app/investments/investments.component.css"],
    providers: [
        InvestmentsService
    ]
})
export class InvestmentsComponent implements OnInit {

    private accounts:Array<String>;

    constructor(private investmentsService:InvestmentsService) {
    }

    ngOnInit():void {
        this.accounts = ["TFSA", "Canadian Holdings"];

        this.investmentsService.get().subscribe(
            investmentData => {
                console.log("InvestmentData" + JSON.stringify(investmentData));
            }
        )
    }

}
