import { AuthService } from './../../shared/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    
    constructor(
        private as: AuthService
    ) { }
    
    ngOnInit() {
    }

    logout() {
        this.as.logout();
    }
        
}
    