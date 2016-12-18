import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable, Subject} from "rxjs/Rx";
import {Investment} from "./model/Investment";
import {StockAccount} from "./model/StockAccount";

@Injectable()
export class InvestmentsService {

    constructor(private http: Http) {
    }

    get(): Observable<Investment> {
        return this.http.get("/api/investments").map(
            response => {
                return new Investment(response.json());
            }
        )
    }

    getSharePrices(stockAccounts:StockAccount[]): Observable<any> {
        let allSymbols = this.extractExchangesAndSymbols(stockAccounts);
        return this.getGoogleSharePrices(allSymbols);
    }

    private extractExchangesAndSymbols(stockAccounts) {
        let allSymbols = {};
        stockAccounts.forEach(stockAccount => {
            stockAccount.stocks.forEach(stock => {
                let exchange = stock.exchange;
                if (allSymbols[exchange] == undefined) {
                    allSymbols[exchange] = [];
                }
                allSymbols[exchange].push(stock.symbol);
            })
        });
        return allSymbols;
    }

    private getGoogleSharePrices(allSymbols: {}): Observable<any> {
        let allExchangeQuery = new Subject();
        for (let exchange in allSymbols) {
            let symbolsForExchange = allSymbols[exchange].join();
            let link = `https://finance.google.com/finance/info?client=ig&q=${exchange}:${symbolsForExchange}`;
            let googleQuery = this.http.get(link).map(
                response => {
                    return JSON.parse(response['_body'].replace('//',''));
                }
            );
            googleQuery.subscribe(data => {
                allExchangeQuery.next(data);
            });
        }
        allExchangeQuery.subscribe(data => {
            console.log("Master observable " + JSON.stringify(data));
        });
        return null;
    }
}