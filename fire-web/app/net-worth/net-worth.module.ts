import {NgModule} from "@angular/core";
import {NetWorthComponent} from "./net-worth.component";
import {CommonModule} from "@angular/common";
import {DataTableModule} from "primeng/components/datatable/datatable";
import {SharedModule} from "primeng/components/common/shared";

@NgModule({
    imports: [
        CommonModule, DataTableModule, SharedModule
    ],
    declarations: [
        NetWorthComponent
    ]
})
export class NetWorthModule {

}