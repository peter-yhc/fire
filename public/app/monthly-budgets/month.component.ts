import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
    templateUrl: 'app/monthly-budgets/month.component.html',
    styleUrls: ['app/monthly-budgets/month.component.css']
})
export class MonthComponent {

    month:string;

    constructor(private route:ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.month = params['id'];
        });
    }

}