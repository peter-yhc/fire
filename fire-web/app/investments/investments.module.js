System.register(["@angular/core", "primeng/components/datatable/datatable", "primeng/components/common/shared", "./investments.component", "./account/investment-account.component", "./summary/investment-summary.component", "@angular/common"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, datatable_1, shared_1, investments_component_1, investment_account_component_1, investment_summary_component_1, common_1;
    var InvestmentsModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (datatable_1_1) {
                datatable_1 = datatable_1_1;
            },
            function (shared_1_1) {
                shared_1 = shared_1_1;
            },
            function (investments_component_1_1) {
                investments_component_1 = investments_component_1_1;
            },
            function (investment_account_component_1_1) {
                investment_account_component_1 = investment_account_component_1_1;
            },
            function (investment_summary_component_1_1) {
                investment_summary_component_1 = investment_summary_component_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            InvestmentsModule = class InvestmentsModule {
            };
            InvestmentsModule = __decorate([
                core_1.NgModule({
                    imports: [
                        common_1.CommonModule, datatable_1.DataTableModule, shared_1.SharedModule,
                    ],
                    declarations: [
                        investments_component_1.InvestmentsComponent,
                        investment_account_component_1.InvestmentAccountComponent,
                        investment_summary_component_1.InvestmentSummaryComponent,
                    ]
                }), 
                __metadata('design:paramtypes', [])
            ], InvestmentsModule);
            exports_1("InvestmentsModule", InvestmentsModule);
        }
    }
});
//# sourceMappingURL=investments.module.js.map