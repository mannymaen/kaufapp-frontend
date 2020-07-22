import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
    imports: [
        CommonModule,
        FontAwesomeModule
    ],
    declarations: [SidebarComponent],
    exports: [
        SidebarComponent
    ]
})
export class SidebarModule { }
