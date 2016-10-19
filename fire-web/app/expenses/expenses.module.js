System.register(["@angular/core", "./expenses.component", "./total/necessary-total.component", "./total/discretionary-total.component", "./total/excess-total.component", "./monthly/total-monthly.component", "./monthly/necessary-monthly.component", "./monthly/discretionary-monthly.component", "./monthly/excess-monthly.component", "primeng/components/datatable/datatable", "primeng/components/common/shared", "@angular/common"], function(exports_1, context_1) {
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
    var core_1, expenses_component_1, necessary_total_component_1, discretionary_total_component_1, excess_total_component_1, total_monthly_component_1, necessary_monthly_component_1, discretionary_monthly_component_1, excess_monthly_component_1, datatable_1, shared_1, common_1;
    var ExpensesModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (expenses_component_1_1) {
                expenses_component_1 = expenses_component_1_1;
            },
            function (necessary_total_component_1_1) {
                necessary_total_component_1 = necessary_total_component_1_1;
            },
            function (discretionary_total_component_1_1) {
                discretionary_total_component_1 = discretionary_total_component_1_1;
            },
            function (excess_total_component_1_1) {
                excess_total_component_1 = excess_total_component_1_1;
            },
            function (total_monthly_component_1_1) {
                total_monthly_component_1 = total_monthly_component_1_1;
            },
            function (necessary_monthly_component_1_1) {
                necessary_monthly_component_1 = necessary_monthly_component_1_1;
            },
            function (discretionary_monthly_component_1_1) {
                discretionary_monthly_component_1 = discretionary_monthly_component_1_1;
            },
            function (excess_monthly_component_1_1) {
                excess_monthly_component_1 = excess_monthly_component_1_1;
            },
            function (datatable_1_1) {
                datatable_1 = datatable_1_1;
            },
            function (shared_1_1) {
                shared_1 = shared_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            ExpensesModule = class ExpensesModule {
            };
            ExpensesModule = __decorate([
                core_1.NgModule({
                    imports: [
                        common_1.CommonModule, datatable_1.DataTableModule, shared_1.SharedModule
                    ],
                    declarations: [
                        expenses_component_1.ExpensesComponent,
                        necessary_total_component_1.NecessaryTotalComponent,
                        discretionary_total_component_1.DiscretionaryTotalComponent,
                        excess_total_component_1.ExcessTotalComponent,
                        total_monthly_component_1.TotalMonthlyComponent,
                        necessary_monthly_component_1.NecessaryMonthlyComponent,
                        discretionary_monthly_component_1.DiscretionaryMonthlyComponent,
                        excess_monthly_component_1.ExcessMonthlyComponent
                    ]
                }), 
                __metadata('design:paramtypes', [])
            ], ExpensesModule);
            exports_1("ExpensesModule", ExpensesModule);
        }
    }
});
//# sourceMappingURL=expenses.module.js.map