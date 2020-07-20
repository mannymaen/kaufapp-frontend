import { User } from './../../interfaces/user';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore'
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    
    constructor(
        private afa: AngularFireAuth,
        private afs: AngularFirestore,
        private router: Router
    ) { }

    login(data) {
        return new Promise ((resolve, reject) => {
            this.afa.signInWithEmailAndPassword(data.email, data.password)
            .then(data => {
                const userDoc = this.afs.doc<any>(`users/${data.user.uid}`);

                resolve(userDoc.valueChanges());
            })
            .catch(error => {
                reject(error);
            });
        })
    }

    logout() {
        localStorage.clear();
        this.afa.signOut();
        this.router.navigateByUrl('/login');
    }
}
