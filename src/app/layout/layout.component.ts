import { AuthService } from './../shared/services/auth/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    
    constructor(
        private as: AuthService
    ) { }
    
    ngOnInit(): void {
    }

    logout() {
        this.as.logout();
    }
    
}
