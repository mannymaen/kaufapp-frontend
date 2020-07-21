import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'

@NgModule({
    imports: [
        CommonModule,
        BsDropdownModule.forRoot()
    ],
    declarations: [NavbarComponent],
    exports: [
        NavbarComponent
    ]
})
export class NavbarModule { }
