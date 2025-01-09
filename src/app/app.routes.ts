import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { AppComponent } from './app.component';
import { ControlStatementComponent } from './components/control-statement/control-statement.component';
import { SignalComponent } from './components/signal/signal.component';

export const routes: Routes = [
    
    {
        path: '',
        redirectTo: 'admin',
        pathMatch: 'full',
    },
    
    {
        path: 'admin',
        component: AdminComponent,
    }, 
    {
        path: 'data-binding',
        component: DataBindingComponent,
    },
    {
        path: 'ng-class',
        component: NgClassComponent,
    },
    {
        path: 'control-statements',
        component: ControlStatementComponent,
    },

    {
        path: 'signal',
        component: SignalComponent,
    },

];
