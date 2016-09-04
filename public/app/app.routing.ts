import {Routes, RouterModule}   from '@angular/router';
import {ModuleWithProviders} from "@angular/core";

import {InstructionsComponent} from "./instructions/instructions.component";
import {HomeComponent} from "./home/home.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ExpensesComponent} from "./expenses/expenses.component";

const appRoutes: Routes = [
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'instructions', component: InstructionsComponent
    },
    {
        path: 'dashboard', component: DashboardComponent
    },
    {
        path: 'expenses', component: ExpensesComponent
    }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);