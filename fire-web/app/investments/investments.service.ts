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

    save(investments: Investment): Observable<number> {
        return this.http.post("/api/investments", investments).map(
            response => {
                return response.status;
            }
        )
    }

    getSharePrices(stockAccount: StockAccount): Observable<any> {
        let allSymbols = this.mapSymbolsToExchanges(stockAccount);
        return this.getGoogleSharePrices(allSymbols);
    }

    private mapSymbolsToExchanges(stockAccount): String[] {
        let exchangeSymbolList = [];
        stockAccount.stocks.forEach(stock => {
            let exchange = stock.exchange;
            exchangeSymbolList.push(`${stock.exchange}:${stock.symbol}`);
        });
        return exchangeSymbolList;
    }

    private getGoogleSharePrices(exchangeSymbolList: String[]): Observable<any> {
        let googleSharePrices = new Subject();
        let link = `https://finance.google.com/finance/info?client=ig&q=${exchangeSymbolList.join()}`;
        let googleQuery = this.http.get(link).map(
            response => {
                return JSON.parse(response['_body'].replace('//', ''));
            }
        );
        googleQuery.subscribe(shares => {
            shares.forEach(share => {
                googleSharePrices.next({"symbol": share.t, "price": share.l});
            });
            googleSharePrices.complete();
        });
        return googleSharePrices;
    }
}