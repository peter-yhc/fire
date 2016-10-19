System.register(["@angular/core", "@angular/platform-browser", "./app.component", "./app.routing", "./navbar/navbar.component", "primeng/primeng", "./service/date-generator.service", "../expenses/expenses.module", "../monthly-budgets/month.module", "../investments/investments.module", "../dashboard/dashboard.module", "../net-worth/net-worth.module", "../instructions/instructions.module", "../home/home.module"], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, app_component_1, app_routing_1, navbar_component_1, primeng_1, date_generator_service_1, expenses_module_1, month_module_1, investments_module_1, dashboard_module_1, net_worth_module_1, instructions_module_1, home_module_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (app_routing_1_1) {
                app_routing_1 = app_routing_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (primeng_1_1) {
                primeng_1 = primeng_1_1;
            },
            function (date_generator_service_1_1) {
                date_generator_service_1 = date_generator_service_1_1;
            },
            function (expenses_module_1_1) {
                expenses_module_1 = expenses_module_1_1;
            },
            function (month_module_1_1) {
                month_module_1 = month_module_1_1;
            },
            function (investments_module_1_1) {
                investments_module_1 = investments_module_1_1;
            },
            function (dashboard_module_1_1) {
                dashboard_module_1 = dashboard_module_1_1;
            },
            function (net_worth_module_1_1) {
                net_worth_module_1 = net_worth_module_1_1;
            },
            function (instructions_module_1_1) {
                instructions_module_1 = instructions_module_1_1;
            },
            function (home_module_1_1) {
                home_module_1 = home_module_1_1;
            }],
        execute: function() {
            AppModule = class AppModule {
            };
            AppModule = __decorate([
                core_1.NgModule({
                    imports: [
                        // System Modules
                        platform_browser_1.BrowserModule,
                        app_routing_1.routing,
                        primeng_1.DataTableModule,
                        primeng_1.SharedModule,
                        // Application Modules
                        dashboard_module_1.DashboardModule,
                        expenses_module_1.ExpensesModule,
                        home_module_1.HomeModule,
                        instructions_module_1.InstructionsModule,
                        investments_module_1.InvestmentsModule,
                        month_module_1.MonthModule,
                        net_worth_module_1.NetWorthModule
                    ],
                    declarations: [
                        app_component_1.AppComponent,
                        navbar_component_1.NavbarComponent
                    ],
                    providers: [
                        app_routing_1.appRoutingProviders,
                        date_generator_service_1.DateGeneratorService
                    ],
                    bootstrap: [
                        app_component_1.AppComponent
                    ]
                }), 
                __metadata('design:paramtypes', [])
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=app.module.js.map