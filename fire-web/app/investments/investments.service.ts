import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {Investment} from "./model/Investment";

@Injectable()
export class InvestmentsService {

    constructor(private http:Http) {
    }

    get():Observable<any> {
        return this.http.get("/api/investments").map(
            response => {
                return new Investment(response.json());
            }
        )
    }
}