import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";

@Injectable()
export class PersistenceEventEmitter {

    private emitter:Observable<any>;

    constructor() {
        this.emitter = Observable.create(observer => {
            setInterval(() => {
                observer.next()
            }, 2000);
        });
    }

    getEmitter():Observable<void> {
        return this.emitter;
    }
}