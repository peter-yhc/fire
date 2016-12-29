import {Component, OnInit} from "@angular/core";
import {InvestmentsService} from "./investments.service";
import {AutoSaveable} from "../application/autosave/AutoSaveable";
import {PersistenceEventEmitter} from "../application/autosave/persistence-event-emitter.service";
import {Investment} from "./model/Investment";

@Component({
    templateUrl: "app/investments/investments.component.html",
    styleUrls: ["app/investments/investments.component.css"],
    providers: [
        InvestmentsService, PersistenceEventEmitter
    ]
})
export class InvestmentsComponent implements OnInit, AutoSaveable {

    entityChanged:boolean;
    persistenceEventEmitter:PersistenceEventEmitter;
    private investment:Investment;

    constructor(private investmentsService:InvestmentsService, persistenceEventEmitter:PersistenceEventEmitter) {
        this.investment = new Investment();
        this.persistenceEventEmitter = persistenceEventEmitter;
    }

    ngOnInit():void {
        this.investmentsService.get().subscribe(
            investment => {
                this.investment = investment;
            }
        );
        this.persistenceEventEmitter.getEmitter().subscribe(
            () => {
                if (this.entityChanged) {
                    this.saveChanges()
                }
            },
            error => console.log("Error" + error)
        )
    }

    markEntityChanged():void {
        this.entityChanged = true;
    }

    saveChanges():void {
        this.investmentsService.save(this.investment).subscribe(
            data => {
                console.log("Success: " + data);
                this.entityChanged = false
            },
            error => console.log("Error: " + error)
        )
    }
}
