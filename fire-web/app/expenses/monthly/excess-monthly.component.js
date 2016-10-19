System.register(['@angular/core', '../../application/service/date-generator.service'], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, date_generator_service_1;
    var ExcessMonthlyComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (date_generator_service_1_1) {
                date_generator_service_1 = date_generator_service_1_1;
            }],
        execute: function() {
            ExcessMonthlyComponent = class ExcessMonthlyComponent {
                constructor(dateGeneratorService) {
                    this.dateGeneratorService = dateGeneratorService;
                }
                ngOnInit() {
                    this.columnDefs = [
                        { headerName: 'Excess Expenses', field: 'excessExpenses' }
                    ];
                    let months = this.dateGeneratorService.getMonths();
                    for (let index in months) {
                        this.columnDefs.push({ headerName: months[index], field: index });
                    }
                    this.rowData = [
                        { excessExpenses: 'Gifts' },
                        { excessExpenses: 'Anniversaries' },
                        { excessExpenses: 'Holidays' },
                        { excessExpenses: 'Travel' },
                        { excessExpenses: 'Business expenses' }
                    ];
                }
            };
            ExcessMonthlyComponent = __decorate([
                core_1.Component({
                    selector: 'excess-monthly-component',
                    templateUrl: 'app/expenses/expense-table.template.html',
                    styleUrls: ['app/expenses/monthly/monthly.component.css']
                }),
                __param(0, core_1.Inject(date_generator_service_1.DateGeneratorService)), 
                __metadata('design:paramtypes', [Object])
            ], ExcessMonthlyComponent);
            exports_1("ExcessMonthlyComponent", ExcessMonthlyComponent);
        }
    }
});
//# sourceMappingURL=excess-monthly.component.js.map