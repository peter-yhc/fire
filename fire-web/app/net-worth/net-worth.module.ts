import {NgModule} from "@angular/core";
import {NetWorthComponent} from "./net-worth.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MultiSelectModule, DataTableModule, SharedModule} from "primeng/primeng";

@NgModule({
    imports: [
        CommonModule, DataTableModule, SharedModule, MultiSelectModule, FormsModule
    ],
    declarations: [
        NetWorthComponent
    ]
})
export class NetWorthModule {

}