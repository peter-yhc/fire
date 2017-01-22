import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {NetWorth} from "./model/NetWorth";

@Injectable()
export class NetWorthService {

    constructor(private http: Http) {
    }

    get(): Observable<NetWorth> {
        return this.http.get("/api/net-worth").map(
            response => {
                return new NetWorth(response.json())
            }
        )
    }

}