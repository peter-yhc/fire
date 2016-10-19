System.register(["@angular/core"], function(exports_1, context_1) {
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
    var core_1;
    var InvestmentAccountComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            InvestmentAccountComponent = class InvestmentAccountComponent {
                ngOnInit() {
                    this.columnDefs = [
                        { headerName: "Category", field: "category" },
                        { headerName: "Symbol", field: "symbol" },
                        { headerName: "Value/Share", field: "valueShare" },
                        { headerName: "Shares", field: "share" },
                        { headerName: "Amount", field: "amount" },
                        { headerName: "Breakdown", field: "breakdown" },
                        { headerName: "Total Value", field: "totalValue" },
                        { headerName: "Updated Date", field: "updatedDate" },
                        { headerName: "Fee", field: "fee" },
                        { headerName: "Fee (in Dollars)", field: "feeDollars" }
                    ];
                    this.rowData = [];
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], InvestmentAccountComponent.prototype, "account", void 0);
            InvestmentAccountComponent = __decorate([
                core_1.Component({
                    selector: "investment-account-component",
                    templateUrl: "app/investments/account/investment-account.component.html"
                }), 
                __metadata('design:paramtypes', [])
            ], InvestmentAccountComponent);
            exports_1("InvestmentAccountComponent", InvestmentAccountComponent);
        }
    }
});
//# sourceMappingURL=investment-account.component.js.map