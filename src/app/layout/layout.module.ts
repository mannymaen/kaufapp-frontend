import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { NavbarModule } from './navbar/navbar.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { LayoutComponent } from './layout.component';


@NgModule({
    declarations: [LayoutComponent],
    imports: [
        CommonModule,
        LayoutRoutingModule,
        NavbarModule,
        SidebarModule
    ]
})
export class LayoutModule { }
