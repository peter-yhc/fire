System.register(["@angular/router", "../instructions/instructions.component", "../home/home.component", "../dashboard/dashboard.component", "../expenses/expenses.component", "../net-worth/net-worth.component", "../investments/investments.component", "../monthly-budgets/month.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, instructions_component_1, home_component_1, dashboard_component_1, expenses_component_1, net_worth_component_1, investments_component_1, month_component_1;
    var appRoutes, appRoutingProviders, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (instructions_component_1_1) {
                instructions_component_1 = instructions_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (expenses_component_1_1) {
                expenses_component_1 = expenses_component_1_1;
            },
            function (net_worth_component_1_1) {
                net_worth_component_1 = net_worth_component_1_1;
            },
            function (investments_component_1_1) {
                investments_component_1 = investments_component_1_1;
            },
            function (month_component_1_1) {
                month_component_1 = month_component_1_1;
            }],
        execute: function() {
            appRoutes = [
                {
                    path: '',
                    redirectTo: 'home',
                    pathMatch: 'full'
                },
                {
                    path: 'home', component: home_component_1.HomeComponent
                }, {
                    path: 'instructions', component: instructions_component_1.InstructionsComponent
                }, {
                    path: 'dashboard', component: dashboard_component_1.DashboardComponent
                }, {
                    path: 'expenses', component: expenses_component_1.ExpensesComponent
                }, {
                    path: 'networth', component: net_worth_component_1.NetWorthComponent
                }, {
                    path: 'investments', component: investments_component_1.InvestmentsComponent
                }, {
                    path: 'months/:id', component: month_component_1.MonthComponent
                }
            ];
            exports_1("appRoutingProviders", appRoutingProviders = []);
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes));
        }
    }
});
//# sourceMappingURL=app.routing.js.map