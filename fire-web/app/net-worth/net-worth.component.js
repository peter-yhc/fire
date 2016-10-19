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
    var NetWorthComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NetWorthComponent = class NetWorthComponent {
                ngOnInit() {
                    this.columnDefs = [
                        { headerName: "Account", field: "account" },
                        { headerName: "Jan 2016", field: "month1" },
                        { headerName: "Feb 2016", field: "month2" },
                        { headerName: "Mar 2016", field: "month3" },
                        { headerName: "Apr 2016", field: "month4" },
                        { headerName: "May 2016", field: "month5" },
                        { headerName: "Jun 2016", field: "month6" },
                        { headerName: "Jul 2016", field: "month7" },
                        { headerName: "Aug 2016", field: "month8" },
                        { headerName: "Sep 2016", field: "month9" },
                        { headerName: "Oct 2016", field: "month10" },
                        { headerName: "Nov 2016", field: "month11" },
                        { headerName: "Dec 2016", field: "month12" }
                    ];
                    this.rowData = [
                        { account: "Liquid", month1: 10000, month2: 10000, month3: 10000, month4: 10000, month5: 10000, month6: 10000, month7: 10000, month8: 10000, month9: 10000, month10: 10000, month11: 10000, month12: 10000 },
                        { account: "Income", month1: 10000, month2: 10000, month3: 10000, month4: 10000, month5: 10000, month6: 10000, month7: 10000, month8: 10000, month9: 10000, month10: 10000, month11: 10000, month12: 10000 },
                        { account: "Expenses", month1: 10000, month2: 10000, month3: 10000, month4: 10000, month5: 10000, month6: 10000, month7: 10000, month8: 10000, month9: 10000, month10: 10000, month11: 10000, month12: 10000 },
                        { account: "Invest1", month1: 10000, month2: 10000, month3: 10000, month4: 10000, month5: 10000, month6: 10000, month7: 10000, month8: 10000, month9: 10000, month10: 10000, month11: 10000, month12: 10000 },
                        { account: "Invest2", month1: 10000, month2: 10000, month3: 10000, month4: 10000, month5: 10000, month6: 10000, month7: 10000, month8: 10000, month9: 10000, month10: 10000, month11: 10000, month12: 10000 },
                        { account: "Equity1", month1: 10000, month2: 10000, month3: 10000, month4: 10000, month5: 10000, month6: 10000, month7: 10000, month8: 10000, month9: 10000, month10: 10000, month11: 10000, month12: 10000 },
                        { account: "Debt1", month1: 10000, month2: 10000, month3: 10000, month4: 10000, month5: 10000, month6: 10000, month7: 10000, month8: 10000, month9: 10000, month10: 10000, month11: 10000, month12: 10000 },
                        { account: "Net Worth", month1: 10000, month2: 10000, month3: 10000, month4: 10000, month5: 10000, month6: 10000, month7: 10000, month8: 10000, month9: 10000, month10: 10000, month11: 10000, month12: 10000 },
                    ];
                }
            };
            NetWorthComponent = __decorate([
                core_1.Component({
                    templateUrl: "app/net-worth/net-worth.component.html",
                    styleUrls: ["app/net-worth/net-worth.component.css"]
                }), 
                __metadata('design:paramtypes', [])
            ], NetWorthComponent);
            exports_1("NetWorthComponent", NetWorthComponent);
        }
    }
});
//# sourceMappingURL=net-worth.component.js.map