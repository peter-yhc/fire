import {Routes, RouterModule}   from '@angular/router';
import {ModuleWithProviders} from "@angular/core";

import {InstructionsComponent} from "./instructions/instructions.component";
import {HomeComponent} from "./home/home.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ExpensesComponent} from "./expenses/expenses.component";
import {NetWorthComponent} from "./net-worth/net-worth.component";
import {InvestmentsComponent} from "./investments/investments.component";
import {MonthComponent} from "./month/month.component";

const appRoutes:Routes = [
    {
        path: 'home', component: HomeComponent
    }, {
        path: 'instructions', component: InstructionsComponent
    }, {
        path: 'dashboard', component: DashboardComponent
    }, {
        path: 'expenses', component: ExpensesComponent
    }, {
        path: 'networth', component: NetWorthComponent
    }, {
        path: 'investments', component: InvestmentsComponent
    }, {
        path: 'months/:id', component: MonthComponent
    }
];

export const appRoutingProviders:any[] = [];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);