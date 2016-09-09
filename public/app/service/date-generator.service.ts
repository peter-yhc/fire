import {Injectable} from "@angular/core";

declare var moment: any;

@Injectable()
export class DateGeneratorService {

    private MONTHS: String[] = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Sept', 'Oct', 'Nov', 'Dec'
    ];

    getMonths(): String[] {
        let monthWithYear = [];
        for (let i in this.MONTHS) {
            monthWithYear.push(this.MONTHS[i] + ' ' + moment().year());
        }
        return monthWithYear;
    }
}