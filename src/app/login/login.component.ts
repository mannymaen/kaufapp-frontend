import { User } from './../shared/interfaces/user';
import { AuthService } from './../shared/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    matSnackHorizontal: MatSnackBarHorizontalPosition = 'center';
    matSnackVertical: MatSnackBarVerticalPosition = 'top';

    loginForm: FormGroup;
    
    constructor(
        private as: AuthService,
        private snackBar: MatSnackBar
    ) { }
    
    ngOnInit(): void {
        this.as.logout();
        this.buildForm();
    }

    buildForm() {
        this.loginForm = new FormGroup({
            email: new FormControl(''),
            password: new FormControl('')
        });
    }

    onSubmit() {
        this.as.login(this.loginForm.value)
        .then((data: Observable<User>) => {
            data.subscribe((data) => {
                console.log(data.name);
            });
        }).catch(error => {
            this.openSnack(error);
        })
    }

    openSnack(msg: string) {
        this.snackBar.open(msg, 'Close', {
            duration: 3000,
            horizontalPosition: this.matSnackHorizontal,
            verticalPosition: this.matSnackVertical
        });
    }
    
}
