import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable, Subject} from "rxjs/Rx";
import {Investment} from "./model/Investment";
import {StockAccount} from "./model/StockAccount";

@Injectable()
export class InvestmentsService {

    constructor(private http:Http) {
    }

    get():Observable<Investment> {
        return this.http.get("/api/investments").map(
            response => {
                return new Investment(response.json());
            }
        )
    }

    save(investments: Investment): Observable<void> {
        return this.http.post("/api/investments", investments).map(
            response => {
                return response.status;
            }
        )
    }

    getSharePrices(stockAccount:StockAccount):Observable<any> {
        let allSymbols = this.mapSymbolsToExchanges(stockAccount);
        return this.getGoogleSharePrices(allSymbols);
    }

    private mapSymbolsToExchanges(stockAccount) {
        let exchangeSymbolMap = {};
        stockAccount.stocks.forEach(stock => {
            let exchange = stock.exchange;
            if (exchangeSymbolMap[exchange] == undefined) {
                exchangeSymbolMap[exchange] = [];
            }
            exchangeSymbolMap[exchange].push(stock.symbol);
        });
        return exchangeSymbolMap;
    }

    private getGoogleSharePrices(exchangeSymbolMap:{}):Observable<any> {
        let googleSharePrices = new Subject();
        for (let exchange in exchangeSymbolMap) {
            let symbolsForExchange = exchangeSymbolMap[exchange].join();
            let link = `https://finance.google.com/finance/info?client=ig&q=${exchange}:${symbolsForExchange}`;
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
        }
        return googleSharePrices;
    }
}