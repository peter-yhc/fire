import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
    templateUrl: 'app/monthly-budgets/month.component.html',
    styleUrls: ['app/monthly-budgets/month.component.css']
})
export class MonthComponent {

    private monthId: number;
    private month: string;
    private monthList: Object;

    constructor(private route: ActivatedRoute) {
        this.monthList = {
            "january": "01",
            "february": "02",
            "march": "03",
            "april": "04",
            "may": "05",
            "june": "06",
            "july": "07",
            "august": "08",
            "september": "09",
            "october": "10",
            "november": "11",
            "december": "12"
        }
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.month = params['id'];
            this.monthId = parseInt(this.monthList[this.month]);
        });
    }


}