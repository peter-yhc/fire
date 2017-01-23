import {NgModule} from "@angular/core";
import {NetWorthComponent} from "./net-worth.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MultiSelectModule, DataTableModule, SharedModule} from "primeng/primeng";
import {NetWorthProfileComponent} from "./profile/net-worth-profile.component";

@NgModule({
    imports: [
        CommonModule, DataTableModule, SharedModule, MultiSelectModule, FormsModule
    ],
    declarations: [
        NetWorthComponent,
        NetWorthProfileComponent
    ]
})
export class NetWorthModule {

}