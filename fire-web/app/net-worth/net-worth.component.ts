import {Component, OnInit} from "@angular/core";
import {NetWorthService} from "./net-worth.service";
import {NetWorth} from "./model/NetWorth";

@Component({
    templateUrl: "app/net-worth/net-worth.component.html",
    styleUrls: ["app/net-worth/net-worth.component.css"],
    providers: [
        NetWorthService
    ]
})
export class NetWorthComponent implements OnInit {

    private netWorth: NetWorth;

    constructor(private networthService: NetWorthService) {
        this.netWorth = new NetWorth();
    }

    ngOnInit() {
        this.networthService.get().subscribe(netWorth => {
            this.netWorth = netWorth;
        });
    }
}